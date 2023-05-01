export default class Key {
  constructor(keyName, code) {
    this.code = code;
    this.value = keyName;
    this.cls = 'key';
  }

  createKey() {
    const key = document.createElement('div');
    key.classList.add(this.cls);
    key.innerHTML = `<div class="key_inner">${this.value}</div>`;
    key.dataset.key = this.value;
    key.dataset.keyValue = this.value;
    key.dataset.code = this.code;

    if (this.value === 'Tab') {
      key.classList.add('tab');
      key.dataset.keyValue = '\t';
    }
    if (this.value === 'Enter') {
      key.classList.add('enter');
      key.dataset.keyValue = '\n';
    }
    if (this.value === 'Backspace') {
      key.classList.add('backspace');
      key.dataset.keyValue = '';
    }
    if (this.value === 'CapsLock') {
      key.classList.add('capslock');
      key.dataset.keyValue = '';
      key.dataset.caps = false;
      // if (localStorage.getItem('capslock') === 'true') {
      //   key.innerHTML = '<div class="key_inner key__uppercase">CapsLock</div>';
      // } else {
      //   key.innerHTML = '<div class="key_inner">CapsLock</div>';
      // }
    }
    if (this.value === 'ShiftLeft' || this.value === 'ShiftRight') {
      key.classList.add('shift');
      key.innerHTML = '<div class="key_inner">Shift</div>';

      key.dataset.keyValue = '';
    }
    if (this.value === 'Delete') {
      key.classList.add('delete');
      key.innerHTML = '<div class="key_inner">Del</div>';
      key.dataset.keyValue = '';
    }
    if (this.value === 'ControlLeft' || this.value === 'ControlRight') {
      key.classList.add('control');
      key.innerHTML = '<div class="key_inner">Ctrl</div>';
      key.dataset.keyValue = '';
    }
    if (this.value === 'Win') {
      key.classList.add('meta');
      key.dataset.keyValue = '';
    }
    if (this.value.includes('Alt')) {
      key.classList.add('alt');
      key.dataset.keyValue = '';
      key.innerHTML = '<div class="key_inner">Alt</div>';
    }
    if (this.value.includes('Arrow')) {
      key.classList.add('arrow');
      if (this.value === 'ArrowUp') key.dataset.keyValue = '▲';
      if (this.value === 'ArrowLeft') key.dataset.keyValue = '◄';
      if (this.value === 'ArrowRight') key.dataset.keyValue = '►';
      if (this.value === 'ArrowDown') key.dataset.keyValue = '▼';
      key.innerHTML = `<div class="key_inner">${key.dataset.keyValue}</div>`;
    }
    if (this.value === 'Space') {
      key.classList.add('space');
      key.innerHTML = '<div class="key_inner"></div>';
      key.dataset.keyValue = ' ';
    }

    key.addEventListener('click', this.pressHandler);
    return key;
  }

  pressHandler() {
    const pressedKey = this;
    pressedKey.classList.add('key__active');
    setTimeout(() => { pressedKey.classList.remove('key__active'); }, 300);
    const text = document.querySelector('textarea');
    if (pressedKey.dataset.key === 'CapsLock') {
      if (pressedKey.dataset.caps === 'true') {
        pressedKey.dataset.caps = false;
        localStorage.setItem('capslock', 'false');
      } else {
        pressedKey.dataset.caps = true;
        localStorage.setItem('capslock', 'true');
      }
    }

    if (pressedKey.dataset.key === 'Backspace') {
      const start = text.value.substring(0, text.selectionStart).split('');
      const end = text.value.substring(text.selectionStart, text.value.length);
      start.pop();
      text.value = start.join('') + end;
      text.selectionStart = start.length;
      text.selectionEnd = start.length;
    } else if (pressedKey.dataset.key === 'Delete') {
      const start = text.value.substring(0, text.selectionStart);
      const end = text.value.substring(text.selectionStart, text.value.length).split('');
      end.shift();

      text.value = start + end.join('');
      text.selectionStart = start.length;
      text.selectionEnd = start.length;
    } else {
      const startText = text.value.substring(0, text.selectionStart);
      const endText = text.value.substring(text.selectionStart, text.value.length);
      if (localStorage.getItem('capslock') === 'true') {
        text.value = startText + pressedKey.dataset.keyValue.toUpperCase() + endText;
      } else {
        text.value = startText + pressedKey.dataset.keyValue.toLowerCase() + endText;
      }
      text.selectionStart = startText.length + 1;
      text.selectionEnd = startText.length + 1;
    }

    text.focus();
  }
}

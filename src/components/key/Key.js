export default class Key {
  constructor(keyName) {
    this.value = keyName;
    this.cls = 'key';
  }

  createKey() {
    const key = document.createElement('div');
    key.classList.add(this.cls);
    key.innerHTML = `<div class="key_inner">${this.value}</div>`;
    key.dataset.key = this.value;
    key.dataset.keyValue = this.value;

    if (this.value === 'Tab') {
      key.classList.add('tab');
      key.dataset.keyValue = '';
    }
    if (this.value === 'Enter') {
      key.classList.add('enter');
      key.dataset.keyValue = '';
    }
    if (this.value === 'Backspace') {
      key.classList.add('backspace');
      key.dataset.keyValue = '';
    }
    if (this.value === 'CapsLock') {
      key.classList.add('capslock');
      key.dataset.keyValue = '';
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
    if (this.value === 'Meta') {
      key.classList.add('meta');
      key.dataset.keyValue = '';
    }
    if (this.value === 'Alt') {
      key.classList.add('alt');
      key.dataset.keyValue = '';
    }
    if (this.value.includes('Arrow')) {
      key.classList.add('arrow');
      key.innerHTML = '<div class="key_inner"></div>';
      key.dataset.keyValue = '';
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
    text.value += pressedKey.dataset.keyValue;

    if (pressedKey.dataset.key === 'Backspace' && text.value.length > 0) {
      const newText = text.value.split('');
      newText.pop();
      text.value = newText.join('');
    }

    text.focus();
  }
}

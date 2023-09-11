import { createNode } from '../../utils/utils';

class Key {
  constructor(code, value) {
    this.keyCode = code;
    this.keyValue = value;
    this.keyNode = this.#createKey();
    this.mouseClickHandler = this.mouseClickHandler.bind(this);
    this.clickEvent();
  }

  #createKey() {
    const key = createNode('button', 'key');
    key.innerHTML = `<span class="key_inner">${this.keyValue}</span>`;
    this.#addSpecialKeyClass(key);
    return key;
  }

  #addSpecialKeyClass(key) {
    if (this.keyCode === 'Tab') {
      key.classList.add('tab');
    }
    if (this.keyCode === 'Enter') {
      key.classList.add('enter');
    }
    if (this.keyCode === 'Backspace') {
      key.classList.add('backspace');
    }
    if (this.keyCode === 'CapsLock') {
      key.classList.add('capslock');
    }
    if (this.keyCode.includes('Shift')) {
      key.classList.add('shift');
    }
    if (this.keyCode === 'Delete') {
      key.classList.add('delete');
    }
    if (this.keyCode === 'ControlLeft' || this.value === 'ControlRight') {
      key.classList.add('control');
    }
    if (this.keyCode === 'Win') {
      key.classList.add('meta');
    }
    if (this.keyCode.includes('Alt')) {
      key.classList.add('alt');
    }
    if (this.keyCode.includes('Arrow')) {
      key.classList.add('arrow');
    }
    if (this.keyCode === 'Space') {
      key.classList.add('space');
    }
  }

  clickEvent() {
    this.keyNode.addEventListener('click', this.mouseClickHandler);
  }

  mouseClickHandler() {
    const textarea = document.querySelector('.textarea');
    switch (this.keyCode) {
      case 'Enter':
        textarea.value += '\n';
        break;
      case 'Tab':
        textarea.value += '\t';
        break;
      case 'Delete':
        this.deleteSymbol(textarea);
        break;
      case 'Backspace':
        this.backspaceSymbol(textarea);
        break;
      case 'CapsLock':
        textarea.value += '\n';
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'AltRight':
      case 'AltLeft':
      case 'ControlRight':
      case 'ControlLeft':
      case 'MetaRight':
        break;
      default:
        this.printSymbol(textarea);
        break;
    }
    textarea.focus();
  }

  deleteSymbol(textarea) {
    const start = textarea.value.substring(0, textarea.selectionStart);
    const end = textarea.value
      .substring(textarea.selectionStart, textarea.value.length)
      .split('');
    end.shift();

    textarea.value = start + end.join('');
    textarea.selectionStart = start.length;
    textarea.selectionEnd = start.length;
  }

  backspaceSymbol(textarea) {
    const start = textarea.value
      .substring(0, textarea.selectionStart)
      .split('');
    const end = textarea.value.substring(
      textarea.selectionStart,
      textarea.value.length
    );
    start.pop();
    textarea.value = start.join('') + end;
    textarea.selectionStart = start.length;
    textarea.selectionEnd = start.length;
  }

  printSymbol(textarea, value = this.keyValue) {
    const startText = textarea.value.substring(0, textarea.selectionStart);
    const endText = textarea.value.substring(
      textarea.selectionStart,
      textarea.value.length
    );
    textarea.value = startText + value + endText;
    textarea.selectionStart = startText.length + 1;
    textarea.selectionEnd = startText.length + 1;
  }
}

export default Key;

//   pressHandler() {
//     const pressedKey = this;
//     pressedKey.classList.add('key__active');
//     setTimeout(() => { pressedKey.classList.remove('key__active'); }, 300);
//     const text = document.querySelector('textarea');
//     if (pressedKey.dataset.key === 'CapsLock') {
//       if (pressedKey.dataset.caps === 'true') {
//         pressedKey.dataset.caps = false;
//         localStorage.setItem('capslock', 'false');
//       } else {
//         pressedKey.dataset.caps = true;
//         localStorage.setItem('capslock', 'true');
//       }
//     }

// if (pressedKey.dataset.key === 'Delete') {
//       const start = text.value.substring(0, text.selectionStart);
//       const end = text.value.substring(text.selectionStart, text.value.length).split('');
//       end.shift();

//       text.value = start + end.join('');
//       text.selectionStart = start.length;
//       text.selectionEnd = start.length;
//     } else {
//       const startText = text.value.substring(0, text.selectionStart);
//       const endText = text.value.substring(text.selectionStart, text.value.length);
//       if (localStorage.getItem('capslock') === 'true') {
//         text.value = startText + pressedKey.dataset.keyValue.toUpperCase() + endText;
//       } else {
//         text.value = startText + pressedKey.dataset.keyValue.toLowerCase() + endText;
//       }
//       text.selectionStart = startText.length + 1;
//       text.selectionEnd = startText.length + 1;
//     }

//     text.focus();
//   }
// }

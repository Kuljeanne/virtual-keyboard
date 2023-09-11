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
    key.innerHTML = `<span class="key__inner">${this.keyValue}</span>`;
    key.dataset.code = this.keyCode;
    return key;
  }

  clickEvent() {
    this.keyNode.addEventListener('click', this.mouseClickHandler);
  }

  static keypressEvent() {
    window.addEventListener('keydown', e => {
      e.preventDefault();
      const pressedKey = e.code;
      const targerKey = document.querySelector(
        `.key[data-code="${pressedKey}"]`
      );
      targerKey.classList.add('key_active');
      targerKey.click();
      window.addEventListener('keyup', () => {
        targerKey.classList.remove('key_active');
      });
    });
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
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'AltRight':
      case 'AltLeft':
      case 'ControlRight':
      case 'ControlLeft':
      case 'MetaLeft':
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

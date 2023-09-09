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

  }
}

export default Key;

// export default class Key {
//   constructor(keyName, code) {
//     this.code = code;
//     this.value = keyName;
//     this.cls = 'key';
//   }

//   createKey() {
//     key.addEventListener('click', this.pressHandler);
//     return key;
//   }

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

//     if (pressedKey.dataset.key === 'Backspace') {
//       const start = text.value.substring(0, text.selectionStart).split('');
//       const end = text.value.substring(text.selectionStart, text.value.length);
//       start.pop();
//       text.value = start.join('') + end;
//       text.selectionStart = start.length;
//       text.selectionEnd = start.length;
//     } else if (pressedKey.dataset.key === 'Delete') {
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

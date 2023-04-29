import Key from '../key/Key';

const lineOne = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const lineTwo = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete'];
const lineThree = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'];
const lineFour = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift'];
const lineFive = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl'];
const ALL_KEYS_ENG = [lineOne, lineTwo, lineThree, lineFour, lineFive];
export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.cls = 'keyboard';
    this.lineCLS = 'keyboard_line';
    this.keyboardNode = null;
  }

  renderKeyboard(container) {
    const keyboard = document.createElement('div');
    keyboard.classList.add(this.cls);
    ALL_KEYS_ENG.forEach((line) => {
      keyboard.append(this.createLine(line));
    });
    // если container не html выдать ошибку
    container.append(keyboard);
  }

  createLine(line) {
    const keyLine = document.createElement('div');
    keyLine.classList.add(this.lineCLS);
    line.forEach((key) => {
      const newKey = new Key(key);
      keyLine.append(newKey.createKey());
    });
    return keyLine;
  }
}

import Key from '../key/Key';

const ALL_KEYS_ENG = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']];

const ALL_KEYS_RU = [['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['ShiftLeft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']];

// const shiftSymbols =
// ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.cls = 'keyboard';
    this.lineCLS = 'keyboard_line';
    this.keyboardNode = null;
  }

  renderKeyboard(container, lang) {
    const keyboard = document.createElement('div');
    keyboard.classList.add(this.cls);
    const KEYS = lang === 'eng' ? ALL_KEYS_ENG : ALL_KEYS_RU;
    KEYS.forEach((line) => {
      keyboard.append(this.createLine(line));
    });
    // если container не html выдать ошибку-добавить это
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

import { createNode } from '../../utils/utils';
import Key from '../key/Key';

const KEY_DATA_BY_LINES = [
  {
    Backquote: {
      ru: {
        upper: 'Ё',
        lower: 'ё',
      },
      eng: {
        upper: '`',
        lower: '`',
      },
    },
    Digit1: {
      ru: {
        upper: '!',
        lower: '1',
      },
      eng: {
        upper: '!',
        lower: '1',
      },
    },
    Digit2: {
      ru: {
        upper: '"',
        lower: '2',
      },
      eng: {
        upper: '@',
        lower: '2',
      },
    },
    Digit3: {
      ru: {
        upper: '№',
        lower: '3',
      },
      eng: {
        upper: '#',
        lower: '3',
      },
    },
    Digit4: {
      ru: {
        upper: ';',
        lower: '4',
      },
      eng: {
        upper: '$',
        lower: '4',
      },
    },
    Digit5: {
      ru: {
        upper: '%',
        lower: '5',
      },
      eng: {
        upper: '%',
        lower: '5',
      },
    },
    Digit6: {
      ru: {
        upper: ':',
        lower: '6',
      },
      eng: {
        upper: '^',
        lower: '6',
      },
    },
    Digit7: {
      ru: {
        upper: '?',
        lower: '7',
      },
      eng: {
        upper: '&',
        lower: '7',
      },
    },
    Digit8: {
      ru: {
        upper: '*',
        lower: '8',
      },
      eng: {
        upper: '*',
        lower: '8',
      },
    },
    Digit9: {
      ru: {
        upper: '(',
        lower: '9',
      },
      eng: {
        upper: '(',
        lower: '9',
      },
    },
    Digit0: {
      ru: {
        upper: ')',
        lower: '0',
      },
      eng: {
        upper: ')',
        lower: '0',
      },
    },
    Minus: {
      ru: {
        upper: '_',
        lower: '-',
      },
      eng: {
        upper: '_',
        lower: '-',
      },
    },
    Equal: {
      ru: {
        upper: '+',
        lower: '=',
      },
      eng: {
        upper: '+',
        lower: '=',
      },
    },
    Backspace: {
      ru: {
        upper: 'Backspace',
        lower: 'Backspace',
      },
      eng: {
        upper: 'Backspace',
        lower: 'Backspace',
      },
    },
  },
  {
    Tab: {
      ru: {
        upper: 'Tab',
        lower: 'Tab',
      },
      eng: {
        upper: 'Tab',
        lower: 'Tab',
      },
    },
    KeyQ: {
      ru: {
        upper: 'Й',
        lower: 'Й',
      },
      eng: {
        upper: 'Q',
        lower: 'q',
      },
    },
    KeyW: {
      ru: {
        upper: 'Ц',
        lower: 'ц',
      },
      eng: {
        upper: 'W',
        lower: 'w',
      },
    },
    KeyE: {
      ru: {
        upper: 'У',
        lower: 'у',
      },
      eng: {
        upper: 'E',
        lower: 'e',
      },
    },
    KeyR: {
      ru: {
        upper: 'К',
        lower: 'к',
      },
      eng: {
        upper: 'R',
        lower: 'r',
      },
    },
    KeyT: {
      ru: {
        upper: 'Е',
        lower: 'е',
      },
      eng: {
        upper: 'T',
        lower: 't',
      },
    },
    KeyY: {
      ru: {
        upper: 'Н',
        lower: 'н',
      },
      eng: {
        upper: 'Y',
        lower: 'y',
      },
    },
    KeyU: {
      ru: {
        upper: 'Г',
        lower: 'г',
      },
      eng: {
        upper: 'U',
        lower: 'u',
      },
    },
    KeyI: {
      ru: {
        upper: 'Ш',
        lower: 'ш',
      },
      eng: {
        upper: 'I',
        lower: 'i',
      },
    },
    KeyO: {
      ru: {
        upper: '',
        lower: '',
      },
      eng: {
        upper: 'O',
        lower: 'o',
      },
    },
    KeyP: {
      ru: {
        upper: '',
        lower: '',
      },
      eng: {
        upper: 'P',
        lower: 'p',
      },
    },
    BracketLeft: {
      ru: {
        upper: 'Х',
        lower: 'х',
      },
      eng: {
        upper: '{',
        lower: '[',
      },
    },
    BracketRight: {
      ru: {
        upper: 'Ъ',
        lower: 'ъ',
      },
      eng: {
        upper: '}',
        lower: ']',
      },
    },
    Backslash: {
      ru: {
        upper: '/',
        lower: '/',
      },
      eng: {
        upper: '\\',
        lower: '\\',
      },
    },
    Delete: {
      ru: {
        upper: 'Del',
        lower: 'Del',
      },
      eng: {
        upper: 'Del',
        lower: 'Del',
      },
    },
  },
  {
    CapsLock: {
      ru: {
        upper: 'Caps',
        lower: 'Caps',
      },
      eng: {
        upper: 'Caps',
        lower: 'Caps',
      },
    },
    KeyA: {
      ru: {
        upper: 'Ф',
        lower: 'ф',
      },
      eng: {
        upper: 'A',
        lower: 'a',
      },
    },
    KeyS: {
      ru: {
        upper: 'Ы',
        lower: 'ы',
      },
      eng: {
        upper: 'S',
        lower: 's',
      },
    },
    KeyD: {
      ru: {
        upper: 'В',
        lower: 'в',
      },
      eng: {
        upper: 'D',
        lower: 'd',
      },
    },
    KeyF: {
      ru: {
        upper: 'А',
        lower: 'а',
      },
      eng: {
        upper: 'F',
        lower: 'f',
      },
    },
    KeyG: {
      ru: {
        upper: 'П',
        lower: 'п',
      },
      eng: {
        upper: 'G',
        lower: 'g',
      },
    },
    KeyH: {
      ru: {
        upper: 'Р',
        lower: 'р',
      },
      eng: {
        upper: 'H',
        lower: 'h',
      },
    },
    KeyJ: {
      ru: {
        upper: 'О',
        lower: 'о',
      },
      eng: {
        upper: 'J',
        lower: 'j',
      },
    },
    KeyK: {
      ru: {
        upper: 'Л',
        lower: 'л',
      },
      eng: {
        upper: 'K',
        lower: 'k',
      },
    },
    KeyL: {
      ru: {
        upper: 'Д',
        lower: 'д',
      },
      eng: {
        upper: 'L',
        lower: 'l',
      },
    },
    Semicolon: {
      ru: {
        upper: 'Ж',
        lower: 'ж',
      },
      eng: {
        upper: ':',
        lower: ';',
      },
    },
    Quote: {
      ru: {
        upper: 'Э',
        lower: 'э',
      },
      eng: {
        upper: '"',
        lower: "'",
      },
    },
    Enter: {
      ru: {
        upper: 'Enter',
        lower: 'Enter',
      },
      eng: {
        upper: 'Enter',
        lower: 'Enter',
      },
    },
  },
  {
    ShiftLeft: {
      ru: {
        upper: 'Shift',
        lower: 'Shift',
      },
      eng: {
        upper: 'Shift',
        lower: 'Shift',
      },
    },
    KeyZ: {
      ru: {
        upper: 'Я',
        lower: 'я',
      },
      eng: {
        upper: 'Z',
        lower: 'z',
      },
    },
    KeyX: {
      ru: {
        upper: 'Ч',
        lower: 'ч',
      },
      eng: {
        upper: 'X',
        lower: 'x',
      },
    },
    KeyC: {
      ru: {
        upper: 'С',
        lower: 'с',
      },
      eng: {
        upper: 'C',
        lower: 'c',
      },
    },
    KeyV: {
      ru: {
        upper: 'М',
        lower: 'м',
      },
      eng: {
        upper: 'V',
        lower: 'v',
      },
    },
    KeyB: {
      ru: {
        upper: 'И',
        lower: 'и',
      },
      eng: {
        upper: 'B',
        lower: 'b',
      },
    },
    KeyN: {
      ru: {
        upper: 'Т',
        lower: 'т',
      },
      eng: {
        upper: 'N',
        lower: 'n',
      },
    },
    KeyM: {
      ru: {
        upper: 'Ь',
        lower: 'ь',
      },
      eng: {
        upper: 'M',
        lower: 'm',
      },
    },
    Comma: {
      ru: {
        upper: 'Б',
        lower: 'б',
      },
      eng: {
        upper: '<',
        lower: ',',
      },
    },
    Period: {
      ru: {
        upper: 'Ю',
        lower: 'ю',
      },
      eng: {
        upper: '>',
        lower: '.',
      },
    },
    Slash: {
      ru: {
        upper: ',',
        lower: '.',
      },
      eng: {
        upper: '?',
        lower: '/',
      },
    },
    ArrowUp: {
      ru: {
        upper: '↑',
        lower: '↑',
      },
      eng: {
        upper: '↑',
        lower: '↑',
      },
    },
    ShiftRight: {
      ru: {
        upper: 'Shift',
        lower: 'Shift',
      },
      eng: {
        upper: 'Shift',
        lower: 'Shift',
      },
    },
  },
  {
    ControlLeft: {
      ru: {
        upper: 'Ctrl',
        lower: 'Ctrl',
      },
      eng: {
        upper: 'Ctrl',
        lower: 'Ctrl',
      },
    },
    MetaLeft: {
      ru: {
        upper: 'Win',
        lower: 'Win',
      },
      eng: {
        upper: 'Win',
        lower: 'Win',
      },
    },
    AltLeft: {
      ru: {
        upper: 'Alt',
        lower: 'Alt',
      },
      eng: {
        upper: 'Alt',
        lower: 'Alt',
      },
    },
    Space: {
      ru: {
        upper: ' ',
        lower: ' ',
      },
      eng: {
        upper: ' ',
        lower: ' ',
      },
    },
    AltRight: {
      ru: {
        upper: 'Alt',
        lower: 'Alt',
      },
      eng: {
        upper: 'Alt',
        lower: 'Alt',
      },
    },
    ArrowLeft: {
      ru: {
        upper: '←',
        lower: '←',
      },
      eng: {
        upper: '←',
        lower: '←',
      },
    },
    ArrowDown: {
      ru: {
        upper: '↓',
        lower: '↓',
      },
      eng: {
        upper: '↓',
        lower: '↓',
      },
    },
    ArrowRight: {
      ru: {
        upper: '→',
        lower: '→',
      },
      eng: {
        upper: '→',
        lower: '→',
      },
    },
    ControlRight: {
      ru: {
        upper: 'Ctrl',
        lower: 'Ctrl',
      },
      eng: {
        upper: 'Ctrl',
        lower: 'Ctrl',
      },
    },
  },
];

class Keyboard {
  #lang;

  #caps;

  #node = null;

  constructor(lang, caps = 'lower') {
    this.#lang = lang;
    this.#caps = caps;
    this.#node = this.#createKeyboardNode('div', 'keyboard');
  }

  #createKeyboardNode = createNode;

  renderKeyboard() {
    return this.#node;
  }

  renderKeys() {
    KEY_DATA_BY_LINES.forEach(keyLine => {
      const lineNode = this.#renderKeyboardLine(keyLine);
      this.#node.append(lineNode);
    });
  }

  #renderKeyboardLine(keys) {
    const lineNode = createNode('div', 'keyboard__line');
    Object.keys(keys).forEach(key => {
      const { keyNode } = new Key(key, keys[key][this.#lang][this.#caps]);
      lineNode.append(keyNode);
    });

    return lineNode;
  }
}

export default Keyboard;

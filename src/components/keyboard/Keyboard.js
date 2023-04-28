import createKey from '../key/Key';

const lineOne = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const lineTwo = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
const lineThree = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'];
const lineFour = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift'];
const lineFive = ['Ctrl', 'Meta', 'Alt', 'Space', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const ALL_KEYS = [lineOne, lineTwo, lineThree, lineFour, lineFive];

function createLine(line) {
  const keyLine = document.createElement('div');
  keyLine.classList.add('keyboard_line');
  line.forEach((key) => {
    keyLine.append(createKey(key));
  });

  return keyLine;
}

export default function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  ALL_KEYS.forEach((line) => {
    keyboard.append(createLine(line));
  });

  return keyboard;
}

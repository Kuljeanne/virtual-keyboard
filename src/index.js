/* eslint-disable no-multiple-empty-lines */

import App from './components/app/App';
import Keyboard from './components/keyboard/Keyboard';
import TextArea from './components/text-area/Textarea';

App.appendNode(TextArea());
const keyboard = new Keyboard('eng');
keyboard.renderKeys();

App.appendNode(keyboard.renderKeyboard());

document
  .querySelector('.app')
  .insertAdjacentHTML(
    'afterend',
    '<p class="info">*Клавиатура создана в операционной системе Windows</p><p class="info">*Для переключения языка комбинация: левыe ctrl + alt, Нажатие CapsLock включает и выключает UpperCase</p></p>'
  );


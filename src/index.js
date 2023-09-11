import App from './components/app/App';
import Keyboard from './components/keyboard/Keyboard';
import Key from './components/key/Key';
import TextArea from './components/text-area/Textarea';

App.appendNode(TextArea());
const keyboard = new Keyboard();
keyboard.renderKeys();
Key.keypressEvent();

App.appendNode(keyboard.renderKeyboard());

document
  .querySelector('.app')
  .insertAdjacentHTML(
    'afterend',
    '<p class="info">*Клавиатура создана в операционной системе Windows</p><p class="info">*Для переключения языка комбинация:Shift + alt, Нажатие CapsLock включает и выключает UpperCase</p></p>'
  );

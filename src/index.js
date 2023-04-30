import createApp from './components/virtual-keyboard/App';
import createTextArea from './components/text-area/Textarea';
import Keyboard from './components/keyboard/Keyboard';

createApp();
if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'eng');

document.querySelector('.virtual-keyboard').append(createTextArea());
const keyboard = new Keyboard(localStorage.getItem('lang'));
keyboard.renderKeyboard(document.querySelector('.virtual-keyboard'), localStorage.getItem('lang'));

let altON = false;
let capsLock = true;

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const textarea = document.querySelector('textarea');
  textarea.focus();
  document.querySelectorAll('.key').forEach((key) => {
    if (key.dataset.code === event.code
      || key.dataset.key.toLowerCase() === event.key
      || key.dataset.key === event.code) {
      key.classList.add('key__active');
      if (event.code === 'CapsLock') {
        capsLock = !capsLock;
      }

      if (key.dataset.key === event.key && key.dataset.key === 'Backspace') {
        const start = textarea.value.substring(0, textarea.selectionStart).split('');
        const end = textarea.value.substring(textarea.selectionStart, textarea.value.length);
        start.pop();
        textarea.value = start.join('') + end;
        textarea.selectionStart = start.length;
        textarea.selectionEnd = start.length;
      } else if (key.dataset.key === event.key && key.dataset.key === 'Delete') {
        const start = textarea.value.substring(0, textarea.selectionStart);
        const end = textarea.value.substring(textarea.selectionStart, textarea.value.length).split('');
        end.shift();

        textarea.value = start + end.join('');
        textarea.selectionStart = start.length;
        textarea.selectionEnd = start.length;
      } else {
        const start = textarea.value.substring(0, textarea.selectionStart);
        const end = textarea.value.substring(textarea.selectionStart, textarea.value.length);

        if (capsLock) {
          textarea.value = start + key.dataset.keyValue.toUpperCase() + end;
        } else {
          textarea.value = start + key.dataset.keyValue.toLowerCase() + end;
        }

        textarea.selectionStart = start.length + 1;
        textarea.selectionEnd = start.length + 1;
      }
    }
  });

  if (event.code === 'AltLeft' || event.code === 'ControlLeft') {
    altON = true;
  }
  if ((event.code === 'AltLeft' || event.code === 'ControlLeft') && altON) {
    const lang = localStorage.getItem('lang');
    if (lang === 'eng') {
      localStorage.setItem('lang', 'ru');
      document.querySelector('.virtual-keyboard').lastElementChild.remove();
      keyboard.renderKeyboard(document.querySelector('.virtual-keyboard'), localStorage.getItem('lang'));
      altON = false;
    } else {
      localStorage.setItem('lang', 'eng');
      document.querySelector('.virtual-keyboard').lastElementChild.remove();
      keyboard.renderKeyboard(document.querySelector('.virtual-keyboard'), localStorage.getItem('lang'));
      altON = false;
    }
  }
});

document.addEventListener('keyup', (event) => {
  document.querySelectorAll('.key').forEach((key) => {
    if (key.dataset.code === event.code
      || key.dataset.key.toLowerCase() === event.key
      || key.dataset.key === event.code) {
      key.classList.remove('key__active');
    }
  });
});

document.querySelector('.virtual-keyboard').insertAdjacentHTML('afterend', '<p class="info">*Клавиатура создана в операционной системе Windows</p><p class="info">*Для переключения языка комбинация: левыe ctrl + alt, Нажатие CapsLock включает и выключает UpperCase</p></p>');

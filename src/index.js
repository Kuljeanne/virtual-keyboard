import createApp from './components/virtual-keyboard/App';
import createTextArea from './components/text-area/Textarea';
import Keyboard from './components/keyboard/Keyboard';

createApp();
localStorage.setItem('lang', 'eng');
document.querySelector('.virtual-keyboard').append(createTextArea());
const keyboard = new Keyboard(localStorage.getItem('lang'));
keyboard.renderKeyboard(document.querySelector('.virtual-keyboard'));

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const textarea = document.querySelector('textarea');
  textarea.focus();
  document.querySelectorAll('.key').forEach((key) => {
    if (key.dataset.key === event.key
      || key.dataset.key.toLowerCase() === event.key
      || key.dataset.key === event.code) {
      key.classList.add('key__active');

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
        textarea.value = start + key.dataset.keyValue + end;
        textarea.selectionStart = start.length + 1;
        textarea.selectionEnd = start.length + 1;
      }
    }
  });
});

document.addEventListener('keyup', (event) => {
  document.querySelectorAll('.key').forEach((key) => {
    if (key.dataset.key === event.key
      || key.dataset.key.toLowerCase() === event.key
      || key.dataset.key === event.code) {
      key.classList.remove('key__active');
    }
  });
});

document.querySelector('.virtual-keyboard').insertAdjacentHTML('afterend', '<p class="info">*Клавиатура создана в операционной системе Windows</p><p class="info">*Для переключения языка комбинация: левыe ctrl + alt</p></p>');

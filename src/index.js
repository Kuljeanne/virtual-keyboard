import createApp from './components/virtual-keyboard/App';
import createTextArea from './components/text-area/Textarea';
import Keyboard from './components/keyboard/Keyboard';

createApp();
document.querySelector('.virtual-keyboard').append(createTextArea());

const keyboard = new Keyboard('eng');
keyboard.renderKeyboard(document.querySelector('.virtual-keyboard'));

window.addEventListener('keydown', (event) => {
  console.log(event);
  document.querySelector('textarea').focus();
  document.querySelectorAll('.key').forEach((key) => {
    if (key.dataset.key === event.key
      || key.dataset.key.toLowerCase() === event.key
      || key.dataset.key === event.code) {
      key.classList.add('key__active');
    }
  });
});

window.addEventListener('keyup', (event) => {
  document.querySelectorAll('.key').forEach((key) => {
    if (key.dataset.key === event.key
      || key.dataset.key.toLowerCase() === event.key
      || key.dataset.key === event.code) {
      key.classList.remove('key__active');
    }
  });
});

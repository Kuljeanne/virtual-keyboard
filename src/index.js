import createApp from './components/virtual-keyboard/App';
import createTextArea from './components/text-area/Textarea';
import Keyboard from './components/keyboard/Keyboard';

createApp();
document.querySelector('.virtual-keyboard').append(createTextArea());

const keyboard = new Keyboard('eng');
keyboard.renderKeyboard(document.querySelector('.virtual-keyboard'));
keyboard.eventHandler();
// window.addEventListener('keypress',(event)=> console.log(event.key))

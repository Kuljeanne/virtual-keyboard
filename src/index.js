import createApp from './components/virtual-keyboard/App';
import createTextArea from './components/text-area/Textarea';
import createKeyboard from './components/keyboard/Keyboard';

createApp();
document.querySelector('.virtual-keyboard').append(createTextArea());
document.querySelector('.virtual-keyboard').append(createKeyboard());

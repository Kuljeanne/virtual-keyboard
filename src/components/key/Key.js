export default function createKey(keyName) {
  const key = document.createElement('div');
  key.classList.add('key');
  key.innerText = keyName;

  if (keyName === 'Tab') {
    key.classList.add('tab');
  }
  if (keyName === 'Enter') {
    key.classList.add('enter');
  }
  if (keyName === 'Backspace') {
    key.classList.add('backspace');
  }
  if (keyName === 'CapsLock') {
    key.classList.add('capsLock');
  }
  if (keyName === 'Shift') {
    key.classList.add('shift');
  }
  if (keyName === 'Ctrl') {
    key.classList.add('control');
  }
  if (keyName === 'Meta') {
    key.classList.add('meta');
  }
  if (keyName === 'Alt') {
    key.classList.add('alt');
  }
  if (keyName.includes('Arrow')) {
    key.classList.add('arrow');
    key.innerText = '';
  }
  if (keyName === 'Space') {
    key.classList.add('space');
    key.innerText = '';
  }

  return key;
}

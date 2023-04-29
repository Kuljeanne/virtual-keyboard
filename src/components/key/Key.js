export default class Key {
  constructor(keyName) {
    this.value = keyName;
    this.cls = 'key';
  }

  createKey() {
    const key = document.createElement('div');
    key.classList.add(this.cls);
    key.innerHTML = `<div class="key_inner">${this.value}</div>`;
    key.dataset.key = this.value;

    if (this.value === 'Tab') {
      key.classList.add('tab');
    }
    if (this.value === 'Enter') {
      key.classList.add('enter');
    }
    if (this.value === 'Backspace') {
      key.classList.add('backspace');
    }
    if (this.value === 'CapsLock') {
      key.classList.add('capslock');
    }
    if (this.value === 'Shift') {
      key.classList.add('shift');
    }
    if (this.value === 'Delete') {
      key.classList.add('delete');
      key.innerHTML = '<div class="key_inner">Del</div>';
    }
    if (this.value === 'Ctrl') {
      key.classList.add('control');
    }
    if (this.value === 'Meta') {
      key.classList.add('meta');
    }
    if (this.value === 'Alt') {
      key.classList.add('alt');
    }
    if (this.value.includes('Arrow')) {
      key.classList.add('arrow');
      key.innerHTML = '<div class="key_inner"></div>';
    }
    if (this.value === 'Space') {
      key.classList.add('space');
      key.innerHTML = '<div class="key_inner"></div>';
    }
    return key;
  }
}

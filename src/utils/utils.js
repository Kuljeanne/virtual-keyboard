/* eslint-disable import/prefer-default-export */
export const createNode = (element, cls) => {
  const node = document.createElement(element);
  node.classList.add(cls);
  return node;
};

// export const KEY_CODE = [
// //  {'Backquote': {eng: '`', ru: 'Ё'}, 'Digit1': {eng: '`', ru: 'Ё'}, 'Digit2':
// // {eng: '`', ru: 'Ё'}, 'Digit3': {eng: '`', ru: 'Ё'},
// // 'Digit4': {eng: '`', ru: 'Ё'}, 'Digit5': {eng: '`', ru: 'Ё'}
// // , 'Digit6': {eng: '`', ru: 'Ё'}, 'Digit7': {eng: '`', ru: 'Ё'}, 'Digit8':
// //  {eng: '`', ru: 'Ё'}, 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',},
//   ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
//   ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
//   ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
//   ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
// ];

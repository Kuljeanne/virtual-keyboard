export default function createTextArea() {
  const node = document.createElement('textarea');
  node.setAttribute('autofocus', true);
  node.classList.add('textarea');
  return node;
}

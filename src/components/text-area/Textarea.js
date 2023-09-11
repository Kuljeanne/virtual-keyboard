import { createNode } from '../../utils/utils';

export default function TextArea() {
  const node = createNode('textarea', 'textarea');
  node.setAttribute('autofocus', true);
  return node;
}

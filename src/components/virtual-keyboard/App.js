export default function createApp() {
  const APP = document.createElement('div');
  APP.classList.add('virtual-keyboard');
  document.body.append(APP);
  return APP;
}

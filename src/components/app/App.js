class App {
  #app = null;

  constructor() {
    this.#app = this.#createApp();
  }

  #createApp() {
    const APP = document.createElement('div');
    APP.classList.add('app');
    document.body.append(APP);
    return APP;
  }

  appendNode(node) {
    this.#app.append(node);
    return this.#app;
  }
}

export default new App();

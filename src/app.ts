import 'p2';
import 'pixi';
import 'phaser';

import { Main } from './main';

class App extends Phaser.Game {
  constructor() {
    super({
      width: 500,
      height: 800,
      renderer: Phaser.AUTO
    });

    this.state.add('Main', Main, true);
  }
}

window.onload = () => {
  new App();
};
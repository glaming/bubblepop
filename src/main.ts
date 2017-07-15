import 'phaser';

import { BubbleGrid } from './bubble-grid';

export class Main extends Phaser.State {

  preload(): void {
    this.game.load.image('logo', 'phaser.png');
    this.game.load.atlas('bubble', 'assets/bubble_atlas.png', 'assets/bubble_atlas.json');
  }

  create(): void {
    let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

    new BubbleGrid(this.game);
  }
}
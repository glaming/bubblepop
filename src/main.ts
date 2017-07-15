import 'phaser';

import { Bubble } from './bubble';

export class Main extends Phaser.State {

  preload(): void {
    this.game.load.image('logo', 'phaser.png');
    this.game.load.atlas('bubble', 'assets/bubble_atlas.png', 'assets/bubble_atlas.json');
  }

  create(): void {
    let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

    let bubble = new Bubble(this.game, this.game.world.centerX, this.game.world.centerY, Bubble.Type.Red);
    this.game.add.existing(bubble);

    bubble.inputEnabled = true;
    bubble.events.onInputDown.add(() => {
      bubble.pop();
    });
  }
}
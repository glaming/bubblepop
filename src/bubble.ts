import 'phaser';

import { Util } from './util';

enum Type {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Purple
}

export class Bubble extends Phaser.Sprite {
  static Type = Type;

  static getTypeName(t: Type): string {
    let lookup = {
      [Type.Red]: 'red',
      [Type.Orange]: 'orange',
      [Type.Yellow]: 'yellow',
      [Type.Green]: 'green',
      [Type.Blue]: 'blue',
      [Type.Purple]: 'purple'
    };

    return lookup[t];
  }

  // Taken from https://stackoverflow.com/a/44230999/2080491
  static getRandomType(): Type {
    let typeVals = Object.keys(Type)
      .map(n => parseInt(n))
      .filter(n => !isNaN(n));

    return typeVals[Util.getRandomInt(0, typeVals.length)];
  }

  constructor(game: Phaser.Game, x: number, y: number, type: Type) {
    let name = Bubble.getTypeName(type);
    let frameName = `bubble_${name}.png`;
    let animationFrameNames = Phaser.Animation.generateFrameNames(`bubble_pop_${name}_`, 1, 6, '.png', 0);

    super(game, x, y, 'bubble', frameName);

    this.anchor.setTo(0.5, 0.5);

    let animationPop = this.animations.add('pop', animationFrameNames, 30);
    animationPop.onComplete.add(() => this.onPopAnimationComplete());
  }

  pop(): void {
    this.animations.play('pop');
  }

  private onPopAnimationComplete(): void {
    this.destroy();
  }
}

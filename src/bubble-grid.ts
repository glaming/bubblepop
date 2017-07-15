import 'phaser';

import { Bubble } from './bubble';

export class BubbleGrid extends Phaser.Group {
  private grid: Bubble[][];
  private gridWidth: number;
  private gridHeight: number;

  constructor(game: Phaser.Game) {
    super(game);

    this.gridWidth = 7;
    this.gridHeight = 5;

    this.initGrid();
  }

  private initGrid(): void {
    this.grid = [];

    for(let y = 0; y < this.gridHeight; y++) {
      let row = [];

      for(let x = 0; x < this.gridWidth; x++) {
        row.push(this.createBubble(35 + x * 70, 35 + y * 70, Bubble.getRandomType()));
      }

      this.grid.push(row);
    }
  }

  private createBubble(x, y, type): Bubble {
    let bubble = new Bubble(this.game, x, y, type);

    this.add(bubble);

    bubble.inputEnabled = true;
    bubble.events.onInputDown.add(() => {
      bubble.pop();
    });

    return bubble;
  }
}

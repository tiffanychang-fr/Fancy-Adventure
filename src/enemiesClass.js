class Enemies {
  constructor() {
    // Level 1 enemy objects
    this.enemyArray_levelOne = [];
    this.balloon = new Balloon(520, 220, 10.7, 14.7);
    this.balloon2 = new Balloon(900, 600, 18.7, 21.7);
    this.balloon3 = new Balloon(340, 510, 6.5, 7.9);

    this.enemyArray_levelOne.push(this.balloon);
    this.enemyArray_levelOne.push(this.balloon2);
    this.enemyArray_levelOne.push(this.balloon3);

    // Level 2 enemy objects
  }

  preload() {
    this.enemyArray_levelOne.forEach((enemy) => enemy.preload());
  }

  drawEnemies() {
    this.enemyArray_levelOne.forEach((enemy) => enemy.drawEnemy());
  }
}

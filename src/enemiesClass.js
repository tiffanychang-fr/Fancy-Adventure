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
    this.enemyArray_levelTwo = [];
    this.balloon = new Balloon(340, 510, 5.5, 7.9);
    this.balloon2 = new Balloon(520, 225, 9.7, 14.7);
    this.balloon3 = new Balloon(800, 550, 13.7, 15.7);
    this.balloon4 = new Balloon(1215, 200, 22.7, 27.7);

    this.enemyArray_levelTwo.push(this.balloon);
    this.enemyArray_levelTwo.push(this.balloon2);
    this.enemyArray_levelTwo.push(this.balloon3);
    this.enemyArray_levelTwo.push(this.balloon4);
  }

  preload() {
    this.enemyArray_levelOne.forEach((enemy) => enemy.preload());
    this.enemyArray_levelTwo.forEach((enemy) => enemy.preload());
  }

  drawEnemies() {
    if (level === "level 1") {
      this.enemyArray_levelOne.forEach((enemy) => enemy.drawEnemy());
    } else if (level === "level 2") {
      this.enemyArray_levelTwo.forEach((enemy) => enemy.drawEnemy());
    }
  }
}

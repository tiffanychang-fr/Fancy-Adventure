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

    // Level 3 enemy objects
    this.enemyArray_levelThree = [];
    this.balloon = new Balloon(520, 220, 10.7, 14.7);
    this.balloon2 = new Balloon(1230, 500, 25.2, 28.5);
    this.balloon4 = new Balloon(135, 165, 1.1, 6.7);
    this.balloon5 = new Balloon(800, 550, 13.7, 15.7);
    this.balloon6 = new Balloon(1200, 200, 24.7, 28.2);

    this.enemyArray_levelThree.push(this.balloon);
    this.enemyArray_levelThree.push(this.balloon2);
    this.enemyArray_levelThree.push(this.balloon4);
    this.enemyArray_levelThree.push(this.balloon5);
    this.enemyArray_levelThree.push(this.balloon6);

    // Level 4 enemy objects
    this.enemyArray_levelFour = [];
    this.balloon = new Balloon(75, 475, 1.5, 3.8);
    this.balloon2 = new Balloon(520, 220, 10.7, 14.7);
    this.balloon3 = new Balloon(1300, 450, 26.7, 28.5);
    this.balloon4 = new Balloon(135, 160, 1.1, 6.7);
    this.balloon5 = new Balloon(800, 505, 13.7, 15.7);
    this.balloon6 = new Balloon(1000, 200, 20.7, 25.2);

    this.enemyArray_levelFour.push(this.balloon);
    this.enemyArray_levelFour.push(this.balloon2);
    this.enemyArray_levelFour.push(this.balloon3);
    this.enemyArray_levelFour.push(this.balloon4);
    this.enemyArray_levelFour.push(this.balloon5);
    this.enemyArray_levelFour.push(this.balloon6);
  }

  preload() {
    this.enemyArray_levelOne.forEach((enemy) => enemy.preload());
    this.enemyArray_levelTwo.forEach((enemy) => enemy.preload());
    this.enemyArray_levelThree.forEach((enemy) => enemy.preload());
    this.enemyArray_levelFour.forEach((enemy) => enemy.preload());
  }

  drawEnemies() {
    if (level === "level 1") {
      this.enemyArray_levelOne.forEach((enemy) => enemy.drawEnemy());
    } else if (level === "level 2") {
      this.enemyArray_levelTwo.forEach((enemy) => enemy.drawEnemy());
    } else if (level === "level 3") {
      this.enemyArray_levelThree.forEach((enemy) => enemy.drawEnemy());
    } else if (level === "level 4") {
      this.enemyArray_levelFour.forEach((enemy) => enemy.drawEnemy());
    }
  }
}

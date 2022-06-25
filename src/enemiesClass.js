class Enemies {
  constructor() {
    this.enemyArray = [];

    this.balloon = new Balloon(520, 210);
    this.balloon2 = new Balloon(900, 590);

    this.enemyArray.push(this.balloon);
    this.enemyArray.push(this.balloon2);
  }

  preload() {
    this.enemyArray.forEach((enemy) => enemy.preload());
  }

  drawEnemies() {
    this.enemyArray.forEach((enemy) => enemy.drawEnemy());
  }
}

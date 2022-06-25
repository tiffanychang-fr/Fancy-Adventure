class Enemies {
  constructor() {
    this.enemyArray = [];

    this.balloon = new Balloon(520, 220, 10.7, 14.7);
    this.balloon2 = new Balloon(900, 600, 18.7, 21.7);
    this.balloon3 = new Balloon(340, 510, 6.5, 7.9);

    this.enemyArray.push(this.balloon);
    this.enemyArray.push(this.balloon2);
    this.enemyArray.push(this.balloon3);
  }

  preload() {
    this.enemyArray.forEach((enemy) => enemy.preload());
  }

  drawEnemies() {
    this.enemyArray.forEach((enemy) => enemy.drawEnemy());
  }
}

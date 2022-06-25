class Enemies {
  constructor() {
    this.enemyArray = [];

    this.balloon = new Balloon(520, 210, 10.7, 14.7);
    this.balloon2 = new Balloon(900, 590, 18.7, 21.7);

    this.enemyArray.push(this.balloon);
    this.enemyArray.push(this.balloon2);

    // this.speed = 1;
    // this.changeDirection = false;
    // this.enemyMovingPathX = [
    //   [10, 14.7],
    //   [17, 21.7],
    // ];
  }

  preload() {
    this.enemyArray.forEach((enemy) => enemy.preload());
  }

  drawEnemies() {
    this.enemyArray.forEach((enemy) => enemy.drawEnemy());
  }
}

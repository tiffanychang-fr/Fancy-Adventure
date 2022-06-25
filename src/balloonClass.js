class Balloon {
  constructor(x, y, startX, endX, isMovingRight = true) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
    this.speed = 1;
    this.startX = startX;
    this.endX = endX;
    this.isMovingRight = isMovingRight;
  }

  preload() {
    this.img = loadImage("./assets/enemies/yellow_balloon.png");
  }

  drawEnemy() {
    image(this.img, this.x, this.y, this.width, this.height);

    // Draw the ballon enemy moving path

    if (this.x > this.endX * SQUARE_SIDE) {
      this.isMovingRight = false;
    } else if (this.x <= this.startX * SQUARE_SIDE) {
      this.isMovingRight = true;
    }

    if (
      this.x >= (this.startX - 0.7) * SQUARE_SIDE &&
      this.isMovingRight == true
    ) {
      this.x += this.speed;
    } else if (this.isMovingRight == false) {
      this.x -= this.speed;
    }

    // console.log(this.enemyMovingPathX);

    // Following is the hard code for testing
    // if (
    //   (this.x >= 18 * SQUARE_SIDE && this.x <= 21.7 * SQUARE_SIDE) ||
    //   (this.x >= 10 * SQUARE_SIDE && this.x <= 14.7 * SQUARE_SIDE)
    // ) {
    //   this.x += this.speed;
    // }
  }
}

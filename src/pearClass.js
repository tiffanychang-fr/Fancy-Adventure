class Pear {
  constructor(x, y, startY, endY, isMovingDown = true) {
    this.x = x;
    this.y = y;
    this.width = 48;
    this.height = 48;
    this.speed = 0.19;
    this.startY = startY;
    this.endY = endY;
    this.isMovingDown = isMovingDown;
  }

  preload() {
    this.img = loadImage("./assets/objects/pear.png");
  }

  drawFruit() {
    image(this.img, this.x, this.y, this.width, this.height);

    // Draw the pear moving path
    if (this.y > this.endY * SQUARE_SIDE) {
      this.isMovingDown = false;
    } else if (this.y <= this.startY * SQUARE_SIDE) {
      this.isMovingDown = true;
    }

    if (
      this.y >= (this.startY - 0.7) * SQUARE_SIDE &&
      this.isMovingDown == true
    ) {
      this.y += this.speed;
    } else if (this.isMovingDown == false) {
      this.y -= this.speed;
    }
  }
}

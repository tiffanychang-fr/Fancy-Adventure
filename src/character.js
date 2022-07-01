class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.leftFoot = (1 / 3) * SQUARE_SIDE;
    this.rightFoot = (2 / 3) * SQUARE_SIDE;
    this.bodyMiddle = (1 / 2) * SQUARE_SIDE;
    this.velocity = 0;
    this.floor = STARTING_FLOOR;
  }

  preload() {
    this.img = loadImage("./assets/player/finn.png");
  }

  drawPlayer() {
    image(this.img, this.x, this.y, this.width, this.height);

    this.velocity += GRAVITY;
    this.y += this.velocity;

    // draw starting floor and water floor
    if (this.x <= SQUARE_SIDE) {
      this.floor = STARTING_FLOOR;
    } else {
      this.floor = WATER_FLOOR;
    }

    if (this.ReachedTheGround()) {
      this.y = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }
    this.leftFoot = this.x + (1 / 3) * this.width;
    this.rightFoot = this.x + (2 / 3) * this.width;
  }

  keyPressed() {
    if (keyCode === SPACE_BAR) {
      this.jump();
    }
  }

  movePlayer(isCollidingLefttWall, isCollidingRightWall) {
    if (this.x < -7) {
      this.x = -7;
    } else if (this.x > CANVAS_WIDTH - 32) {
      this.x = CANVAS_WIDTH - 32;
    }

    if (!isCollidingRightWall && keyIsDown(ARROW_RIGHT)) {
      this.x += 3;
    } else if (!isCollidingLefttWall && keyIsDown(ARROW_LEFT)) {
      this.x -= 3;
    }
  }

  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.y -= 50;
    this.velocity -= 6;
    this.jumpCount++;
  }
  // console.log(this.velocity);

  ReachedTheGround() {
    return this.y >= this.floor;
  }

  resurrect() {
    this.x = 0;
    this.y = 0;
  }
}

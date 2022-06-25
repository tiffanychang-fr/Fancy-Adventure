class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 48;
    this.height = 48;
    this.velocity = 0;
    this.floor = FLOOR;
    this.canJump = true;
  }

  preload() {
    this.img = loadImage("./assets/player/finn.png");
  }

  drawPlayer() {
    this.velocity += GRAVITY;
    this.y += this.velocity;
    image(this.img, this.x, this.y, this.width, this.height);

    if (this.ReachedTheGround()) {
      this.y = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }
  }

  keyPressed() {
    if (keyCode === SPACE_BAR) {
      this.canJump = true;
      this.jump();
    }
  }

  movePlayer() {
    if (this.x < -7) {
      this.x = -7;
    } else if (this.x > CANVAS_WIDTH - 32) {
      this.x = CANVAS_WIDTH - 32;
    }

    if (keyIsDown(ARROW_RIGHT)) {
      this.x += 2;
    } else if (keyIsDown(ARROW_LEFT)) {
      this.x -= 2;
    }
  }

  jump() {
    if (this.canJump == true) {
      if (this.jumpCount === 2) {
        return;
      }
      this.y -= 50;
      this.velocity -= 6;
      this.jumpCount++;
    }
    // console.log(this.velocity);
  }

  ReachedTheGround() {
    return this.y >= this.floor;
  }
}

class Grape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 48;
    this.height = 48;
  }

  preload() {
    this.img = loadImage("./assets/objects/grape.png");
  }

  // collectFruit() {
  //   push();
  //   tint(255, 126);
  //   pop();
  // }

  drawFruit() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
}

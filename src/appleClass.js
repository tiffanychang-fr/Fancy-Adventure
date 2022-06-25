class Apple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 48;
    this.height = 48;
  }

  preload() {
    this.img = loadImage("./assets/objects/apple.png");
  }

  // collectFruit() {
  //   tint(0, 153, 204, 126);
  // }

  drawFruit() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
}

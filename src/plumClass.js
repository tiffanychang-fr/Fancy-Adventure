class Plum {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 48;
    this.height = 48;
  }

  preload() {
    this.img = loadImage("./assets/objects/plum.png");
  }

  drawPlum() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
}

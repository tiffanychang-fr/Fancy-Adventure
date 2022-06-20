class Balloon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
  }

  preload() {
    this.img = loadImage("./assets/enemies/yellow_balloon.png");
  }

  drawBalloon() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
}

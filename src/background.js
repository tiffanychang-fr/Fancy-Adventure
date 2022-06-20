class Background {
  constructor() {}
  preload() {
    this.img = loadImage("./assets/background/bkg_spring.png");
  }

  drawBackground() {
    image(this.img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

class Background {
  constructor() {}
  preload() {
    this.imgLevelOne = loadImage("./assets/background/background_level1.png");
    this.imgLevelTwo = loadImage("./assets/background/background_level2.png");
    this.imgLevelThree = loadImage("./assets/background/background_level3.png");
    this.imgLevelFour = loadImage("./assets/background/background_level4.png");
  }

  drawBackground(level) {
    if (level === "level 1") {
      image(this.imgLevelOne, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else if (level === "level 2") {
      image(this.imgLevelTwo, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else if (level === "level 3") {
      image(this.imgLevelThree, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else if (level === "level 4") {
      image(this.imgLevelFour, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }
}

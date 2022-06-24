class Game {
  constructor() {
    this.background = new Background();
    this.map = new Map();
    this.player = new Player();
    this.balloon = new Balloon(520, 205);
    this.balloon2 = new Balloon(900, 495);
    this.grape = new Grape(350, 450);
    this.grape2 = new Grape(960, 400);
    this.pear = new Pear(195, 310);
    this.pear2 = new Pear(1200, 165);
    this.plum = new Plum(145, 190);
    this.plum2 = new Plum(1105, 312);
    this.apple = new Apple(1390, 290);
    this.orange = new Orange(430, 212);
    this.orange2 = new Orange(1295, 505);
  }

  preload() {
    this.background.preload();
    this.player.preload();
    this.balloon.preload();
    this.balloon2.preload();
    this.grape.preload();
    this.grape2.preload();
    this.pear.preload();
    this.pear2.preload();
    this.plum.preload();
    this.plum2.preload();
    this.apple.preload();
    this.orange.preload();
    this.orange2.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.player.movePlayer();
    this.map.drawMap();
    this.balloon.drawBalloon();
    this.balloon2.drawBalloon();
    this.grape.drawGrape();
    this.grape2.drawGrape();
    this.pear.drawPear();
    this.pear2.drawPear();
    this.plum.drawPlum();
    this.plum2.drawPlum();
    this.apple.drawApple();
    this.orange.drawOrange();
    this.orange2.drawOrange();

    // Player-Platform Collision check
    if (this.isCollidingOnPlatform(this.player)) {
      this.landOnPlatform(this.player);
    }
  }

  isCollidingOnPlatform(player) {
    // repeat following logic on all the tiles
    // following is hard code for testing the function
    return (
      player.x >= 64 &&
      player.x <= 64 * 2.5 &&
      player.y + player.height >= player.floor - 32 &&
      player.y + player.height <= player.floor - 16
    );
  }

  landOnPlatform(player) {
    this.player.velocity = 0;
    this.player.jumpCount = 0;
    this.player.y = 450; // hard code for land y position
    console.log("hit");
  }

  keyPressed() {
    this.player.keyPressed();
  }
}

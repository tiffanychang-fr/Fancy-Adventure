class Game {
  constructor() {
    this.background = new Background();
    this.map = new Map();
    this.player = new Player();
    this.balloon = new Balloon(520, 210);
    this.balloon2 = new Balloon(900, 590);
    this.grape = new Grape(340, 450);
    this.grape2 = new Grape(960, 400);
    this.pear = new Pear(195, 330);
    this.pear2 = new Pear(1200, 185);
    this.plum = new Plum(145, 190);
    this.plum2 = new Plum(1105, 332);
    this.plum3 = new Plum(770, 480);
    this.apple = new Apple(1390, 330);
    this.orange = new Orange(435, 235);
    this.orange2 = new Orange(1295, 480);
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
    this.plum3.preload();
    this.apple.preload();
    this.orange.preload();
    this.orange2.preload();
  }

  play() {
    this.background.drawBackground();
    this.drawGrid(); // only for checking the tile position
    this.player.drawPlayer();
    this.player.movePlayer();
    this.balloon.drawBalloon();
    this.balloon2.drawBalloon();
    this.grape.drawGrape();
    this.grape2.drawGrape();
    this.pear.drawPear();
    this.pear2.drawPear();
    this.plum.drawPlum();
    this.plum2.drawPlum();
    this.plum3.drawPlum();
    this.apple.drawApple();
    this.orange.drawOrange();
    this.orange2.drawOrange();

    // Player-Platform Collision check
    this.isCollidingOnPlatform(this.player);
    // if (this.isCollidingOnPlatform(this.player)) {
    //   this.landOnPlatform(this.player);
    // }
  }

  isCollidingOnPlatform(player) {
    // repeat logic on all the tiles
    this.map.lands.forEach((land) => {
      // player.x == land[0] && player.y == land[1]
      if (
        player.x >= SQUARE_SIDE * land[0] - (2 / 3) * player.width &&
        player.x <= SQUARE_SIDE * land[0] + (2 / 3) * player.width &&
        player.y + player.height >= SQUARE_SIDE * land[1] &&
        player.y + player.height <= SQUARE_SIDE * (land[1] + 0.3)
      ) {
        this.landOnPlatform(player, land[1] - 1);
      }
    });

    // following is hard code for testing the function
    // return (
    //   player.x >= SQUARE_SIDE * 2 - (2 / 3) * player.width &&
    //   player.x <= SQUARE_SIDE * 2 + (2 / 3) * player.width &&
    //   player.y + player.height >= SQUARE_SIDE * 11 &&
    //   player.y + player.height <= SQUARE_SIDE * 12 + 5
    // );
  }

  landOnPlatform(player, landY) {
    player.velocity = 0;
    player.jumpCount = 0;
    player.y = SQUARE_SIDE * landY; // hard code for land y position
    // console.log("hit");
  }

  // willFallCheck(player) {
  //   let willFall =
  //     this.map.cliffs.filter((cliff) => {
  //       player.x == cliff[0] && player.y == cliff[1];
  //     }).length > 0;
  //   return willFall;
  // }

  // only for checking the tile position
  drawGrid() {
    for (let i = 0; i <= CANVAS_WIDTH; i += SQUARE_SIDE) {
      for (let j = 0; j < CANVAS_HEIGHT; j += SQUARE_SIDE) {
        //horizontal lines
        line(0, j, CANVAS_WIDTH, j);
        //vertical lines
        line(i, 0, i, CANVAS_HEIGHT);
      }
    }
  }

  keyPressed() {
    this.player.keyPressed();
  }
}

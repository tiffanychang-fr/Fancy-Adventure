class Game {
  constructor() {
    this.background = new Background();
    this.map = new Map();
    this.player = new Player();
    this.balloon = new Balloon(520, 210);
    this.balloon2 = new Balloon(900, 590);
    this.fruits = new Fruits();
  }

  preload() {
    this.background.preload();
    this.player.preload();
    this.balloon.preload();
    this.balloon2.preload();
    this.fruits.preload();
  }

  play() {
    this.background.drawBackground();
    this.drawGrid(); // only for checking the tile position
    this.player.drawPlayer();
    this.player.movePlayer();
    this.balloon.drawBalloon();
    this.balloon2.drawBalloon();
    this.fruits.drawFruits();

    // Player-Platform Collision check
    this.isCollidingOnPlatform(this.player);
    this.isCollidingFruit(this.player, this.fruits);
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
    player.y = SQUARE_SIDE * landY;
  }

  // fallInWater(player, cliffY) {
  //   while (player.y >= WATER_LEVEL) {
  //     player.velocity += GRAVITY;
  //     player.y += player.velocity;
  //   }
  // }

  // collect fruits
  isCollidingFruit(player, fruits) {
    fruits.fruitArray.forEach((fruit, index) => {
      if (
        player.x >= fruit.x - (1 / 2) * SQUARE_SIDE &&
        player.x <= fruit.x + (1 / 2) * SQUARE_SIDE &&
        player.y >= fruit.y - (1 / 2) * SQUARE_SIDE &&
        player.y <= fruit.y + (1 / 2) * SQUARE_SIDE
      ) {
        fruits.fruitArray.splice(index, 1);
        console.log("collect the fruit");
        console.log(this.fruitArray);
      }
    });
  }

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

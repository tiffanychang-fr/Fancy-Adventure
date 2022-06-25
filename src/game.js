class Game {
  constructor() {
    this.background = new Background();
    this.map = new Map();
    this.player = new Player();
    this.fruits = new Fruits();
    this.enemies = new Enemies();
    this.amountOfFruit = 0;
    this.amountOfLives = 3;
  }

  preload() {
    this.background.preload();
    this.player.preload();
    this.fruits.preload();
    this.enemies.preload();
  }

  play() {
    this.background.drawBackground();
    this.drawGrid(); // only for checking the tile position
    this.player.drawPlayer();
    this.player.movePlayer();
    this.fruits.drawFruits();
    this.enemies.drawEnemies();
    // this.enemies.moveEnemy(this.player);

    // Player-Platform Collision check
    this.isCollidingOnPlatform(this.player);
    this.isCollidingFruit(this.player, this.fruits);
    this.isCollidingEnemy(this.player, this.enemies);
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
        this.amountOfFruit++;
        FRUIT_COLLECTION.innerText = this.amountOfFruit;
        if (this.amountOfFruit == 2) {
          LEVEL1_RULE.innerText = ` ✅`;
        }
        // console.log(this.amountOfFruit);
        // console.log("collect the fruit");
      }
    });
  }

  isCollidingEnemy(player, enemies) {
    enemies.enemyArray.forEach((enemy, index) => {
      if (
        player.x >= enemy.x - (1 / 2) * SQUARE_SIDE &&
        player.x <= enemy.x + (1 / 2) * SQUARE_SIDE &&
        player.y >= enemy.y - (1 / 3) * SQUARE_SIDE &&
        player.y <= enemy.y + 1 * SQUARE_SIDE
      ) {
        player.x = 0;
        player.y = FLOOR;
        this.amountOfLives--;
        LIFE.innerText = this.amountOfLives;

        // console.log("life loss");
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

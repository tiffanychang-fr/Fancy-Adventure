class Game {
  constructor() {
    this.background = new Background();
    this.map = new Map();
    this.player = new Player();
    this.fruits = new Fruits();
    this.enemies = new Enemies();
    this.amountOfFruit = 0;
    this.amountOfLives = 3;
    this.positionX = 0;
    this.positionY = 13;
    this.isCollidingLeftWall = false;
    this.isCollidingTopWall = false;
    this.isCollidingRightWall = false;
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
    this.fruits.drawFruits();
    this.enemies.drawEnemies();
    this.restart();

    // Player-Platform Collision check
    this.TileTypeCheck(this.player);
    this.isCollidingFruit(this.player, this.fruits);
    this.isCollidingEnemy(this.player, this.enemies);
    this.isCollidingWater(this.player);
    this.player.movePlayer(this.isCollidingLeftWall, this.isCollidingRightWall);
  }

  restart() {
    if (this.amountOfLives == 0) {
      this.amountOfFruit = 0;
      this.amountOfLives = 3;
      FRUIT_COLLECTION.innerText = this.amountOfFruit;
      LIFE.innerText = this.amountOfLives;
      LEVEL1_RULE.innerText = ``;
    }
  }

  landOnPlatform(player, landingY) {
    player.velocity = 0;
    player.jumpCount = 0;
    player.y = SQUARE_SIDE * landingY;
  }

  // If colliding on type 1 tile
  isCollidingTileType1(player, positionX, positionY) {
    // landing
    if (
      player.rightFoot > SQUARE_SIDE * positionX &&
      player.leftFoot < SQUARE_SIDE * positionX + SQUARE_SIDE &&
      player.y + player.height >= SQUARE_SIDE * (positionY + 1) &&
      player.y + player.height <= SQUARE_SIDE * (positionY + 1.3)
    ) {
      this.landOnPlatform(player, positionY);
    }

    // following is hard code for testing the function
    // return (
    //   player.x >= SQUARE_SIDE * 2 - (2 / 3) * player.width &&
    //   player.x <= SQUARE_SIDE * 2 + (2 / 3) * player.width &&
    //   player.y + player.height >= SQUARE_SIDE * 11 &&
    //   player.y + player.height <= SQUARE_SIDE * 12 + 5
    // );
  }

  TileTypeCheck(player) {
    this.positionX = Math.floor(player.rightFoot / SQUARE_SIDE);
    this.positionY = Math.floor(player.y / SQUARE_SIDE);
    let tileType = this.map.tiles[this.positionX][this.positionY];

    // 0: can fall; 1: can land on; 2: cannot jump through
    if (tileType == 0) {
      this.isCollidingLeftWall = false;
      this.isCollidingTopWall = false;
      this.isCollidingRightWall = false;
    } else if (tileType == 1) {
      this.isCollidingLeftWall = false;
      this.isCollidingTopWall = false;
      this.isCollidingRightWall = false;
      this.isCollidingTileType1(player, this.positionX, this.positionY);
    } else if (tileType == 2) {
      // colliding wall of player's right side
      if (
        player.rightFoot > SQUARE_SIDE * this.positionX &&
        player.leftFoot < SQUARE_SIDE * this.positionX + 0.1 * SQUARE_SIDE
      ) {
        // if colliding on the wall of player's right side, then player cannot move to right.
        this.isCollidingRightWall = true;
        // check if the tile standing on is landable, if so, then make the wall tile landable.
        // without this check, player will fall between two tiles.
        if (
          this.isCollidingRightWall &&
          this.positionX - 1 !== "undefined" &&
          this.map.tiles[this.positionX - 1][this.positionY] == 1
        ) {
          this.landOnPlatform(player, this.positionY);
        }
      }

      // colliding wall of player's left side
      if (
        player.rightFoot > SQUARE_SIDE * this.positionX + 0.9 * SQUARE_SIDE &&
        player.leftFoot < SQUARE_SIDE * this.positionX + SQUARE_SIDE
      ) {
        // if colliding on the wall of player's left side, then player cannot move to left.
        this.isCollidingLeftWall = true;
        // check if the tile standing on is landable, if so, then make the wall tile landable.
        // without this check, player will fall between two tiles.
        if (
          this.isCollidingLeftWall &&
          this.positionX + 1 !== "undefined" &&
          this.map.tiles[this.positionX + 1][this.positionY] == 1
        ) {
          this.landOnPlatform(player, this.positionY);
        }
      }

      // colliding wall of player's top side
      if (
        player.y > SQUARE_SIDE * this.positionY + 0.5 * SQUARE_SIDE &&
        player.y < SQUARE_SIDE * this.positionY + SQUARE_SIDE
      ) {
        // if colliding on the wall of player's left side, then player cannot move to left.
        this.isCollidingTopWall = true;
      }
    }
  }

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
        if (this.amountOfFruit == 10) {
          LEVEL1_RULE.innerText = ` ✅`;
        }
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
        player.y = STARTING_FLOOR;
        this.amountOfLives--;
        LIFE.innerText = this.amountOfLives;
        player.resurrect();
      }
    });
  }

  isCollidingWater(player) {
    if (player.y > WATER_FLOOR - SQUARE_SIDE) {
      player.velocity = 0;
      this.amountOfLives--;
      LIFE.innerText = this.amountOfLives;
      player.resurrect();
    }
  }

  // only for checking the tile position
  drawGrid() {
    stroke("#383838");
    for (let i = 0; i <= CANVAS_WIDTH; i += SQUARE_SIDE) {
      for (let j = 0; j <= CANVAS_HEIGHT; j += SQUARE_SIDE) {
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

class LevelOne {
  constructor() {
    this.background = new Background();
    this.map = new Map();
    this.player = new Player();
    this.treasures = new Treasure();
    this.fruits = new Fruits();
    this.enemies = new Enemies();
    this.amountOfCoins = 0;
    this.amountOfFruits = 0;
    this.amountOfLives = 3;
    this.positionX = 0;
    this.positionY = 13;
    this.isCollidingLeftWall = false;
    this.isCollidingTopWall = false;
    this.isCollidingRightWall = false;
    this.missionCompleted = false;
    this.reachWinPoint = false;
  }

  preload() {
    this.background.preload();
    this.player.preload();
    this.treasures.preload();
    this.fruits.preload();
    this.enemies.preload();
  }

  play() {
    this.background.drawBackground("level 1");
    this.drawGrid(); // only for checking the tile position
    this.player.drawPlayer();
    this.treasures.drawTreasures();
    this.fruits.drawFruits();
    this.enemies.drawEnemies();
    this.restart();

    // Player-Platform Collision check
    this.TileTypeCheck(this.player);
    this.isCollidingTreasure(this.player, this.treasures);
    this.isCollidingFruit(this.player, this.fruits);
    this.isCollidingEnemy(this.player, this.enemies);
    this.isCollidingWater(this.player);
    this.isCollidingWinPoint(this.player);
    this.player.movePlayer(this.isCollidingLeftWall, this.isCollidingRightWall);
  }

  restart() {
    if (this.amountOfLives == 0) {
      MISSION.innerText = `GAME OVER...💫 Do you want to restart❓ ✖ / ✔ `;
    } else if (this.amountOfLives < 0) {
      this.amountOfCoins = 0;
      this.amountOfFruits = 0;
      this.amountOfLives = 3;
      COIN.innerText = this.amountOfCoins;
      FRUIT_COLLECTION.innerText = this.amountOfFruits;
      LIFE.innerText = this.amountOfLives;
      RICHNESS.innerText = ``;
      MISSION_COMPLETED.innerText = ``;
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
    let tileType = this.map.levelOneTiles[this.positionX][this.positionY];

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
          this.map.levelOneTiles[this.positionX - 1][this.positionY] == 1
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
          this.map.levelOneTiles[this.positionX + 1][this.positionY] == 1
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

  // collect coins
  isCollidingTreasure(player, treasures) {
    treasures.coin_levelOne.forEach((coin, index) => {
      if (
        player.x >= coin.x - (1 / 2) * SQUARE_SIDE &&
        player.x <= coin.x + (1 / 2) * SQUARE_SIDE &&
        player.y >= coin.y - (1 / 2) * SQUARE_SIDE &&
        player.y <= coin.y + (1 / 2) * SQUARE_SIDE
      ) {
        treasures.coin_levelOne.splice(index, 1);
        this.amountOfCoins++;
        COIN.innerText = this.amountOfCoins;
        if (this.amountOfCoins == 3) {
          RICHNESS.innerText = ` 💲`;
        } else if (this.amountOfCoins == 6) {
          RICHNESS.innerText = ` 💲💲`;
        } else if (this.amountOfCoins == 10) {
          RICHNESS.innerText = ` 💲💲💲`;
        }
      }
    });
  }

  // collect fruits
  isCollidingFruit(player, fruits) {
    fruits.fruitArray_levelOne.forEach((fruit, index) => {
      if (
        player.x >= fruit.x - (1 / 2) * SQUARE_SIDE &&
        player.x <= fruit.x + (1 / 2) * SQUARE_SIDE &&
        player.y >= fruit.y - (1 / 2) * SQUARE_SIDE &&
        player.y <= fruit.y + (1 / 2) * SQUARE_SIDE
      ) {
        fruits.fruitArray_levelOne.splice(index, 1);
        this.amountOfFruits++;
        FRUIT_COLLECTION.innerText = this.amountOfFruits;
        if (this.amountOfFruits >= 3) {
          MISSION_COMPLETED.innerText = ` ✅`;
          this.missionCompleted = true;
        } else {
          this.missionCompleted = false;
        }
      }
    });
  }

  isCollidingEnemy(player, enemies) {
    enemies.enemyArray_levelOne.forEach((enemy, index) => {
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

  isCollidingWinPoint(player) {
    if (
      player.x + (2 / 3) * SQUARE_SIDE >= WIN_POINT_X &&
      player.x + (2 / 3) * SQUARE_SIDE <= WIN_POINT_X + SQUARE_SIDE &&
      player.y + SQUARE_SIDE >= WIN_POINT_Y &&
      player.y <= WIN_POINT_Y + SQUARE_SIDE
    ) {
      this.reachWinPoint = true;
    } else {
      this.reachWinPoint = false;
    }
  }

  // only for checking the tile position
  drawGrid() {
    stroke(LINE_COLOR);
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

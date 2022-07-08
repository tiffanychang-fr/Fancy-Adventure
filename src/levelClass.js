class Level {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.amountOfCoins = 0;
    this.amountOfFruits = 0;
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
  }

  play(
    level,
    tileArrOfCurrentLevel,
    coinOfCurrentLevel,
    fruitsOfCurrentLevel,
    enemiesOfCurrentLevel
  ) {
    this.background.drawBackground(level);
    this.drawGrid(); // only for checking the tile position
    this.player.drawPlayer();

    // Player-Platform Collision check
    this.TileTypeCheck(this.player, tileArrOfCurrentLevel);
    this.isCollidingTreasure(this.player, coinOfCurrentLevel);
    this.isCollidingFruit(this.player, fruitsOfCurrentLevel);
    this.isCollidingEnemy(this.player, enemiesOfCurrentLevel);
    this.isCollidingWater(this.player);
    this.player.movePlayer(this.isCollidingLeftWall, this.isCollidingRightWall);
  }

  TileTypeCheck(player, tileArrOfCurrentLevel) {
    // Define player position (x, y) and the position's land type ex: 0, 1, 2
    this.positionX = Math.floor(player.rightFoot / SQUARE_SIDE);
    this.positionY = Math.floor(player.y / SQUARE_SIDE);
    let tileType = tileArrOfCurrentLevel[this.positionX][this.positionY];

    // 0: can fall; 1: can land on; 2: cannot move through
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
      this.isCollidingTileType2(
        player,
        this.positionX,
        this.positionY,
        tileArrOfCurrentLevel
      );
    }
  }

  landOnPlatform(player, landingY) {
    player.velocity = 0;
    player.jumpCount = 0;
    player.y = SQUARE_SIDE * landingY;
  }

  // If player is colliding on type 1 tile
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

  // If player is colliding on type 2 tile
  isCollidingTileType2(player, positionX, positionY, tileArrOfCurrentLevel) {
    // check if the player is colliding wall on player's right side
    if (
      player.rightFoot > SQUARE_SIDE * positionX &&
      player.leftFoot < SQUARE_SIDE * positionX + 0.1 * SQUARE_SIDE
    ) {
      // if colliding on the wall on player's right side, then player cannot move to right.
      this.isCollidingRightWall = true;
      // check if the tile standing on is landable, if so, then make the wall tile landable.
      // without this check, player will fall between two tiles.
      if (
        this.isCollidingRightWall &&
        positionX - 1 !== "undefined" &&
        tileArrOfCurrentLevel[positionX - 1][positionY] == 1
      ) {
        this.landOnPlatform(player, positionY);
      }
    }

    // check if the player is colliding wall on player's left side
    if (
      player.rightFoot > SQUARE_SIDE * positionX + 0.9 * SQUARE_SIDE &&
      player.leftFoot < SQUARE_SIDE * positionX + SQUARE_SIDE
    ) {
      // if colliding on the wall on player's left side, then player cannot move to left.
      this.isCollidingLeftWall = true;
      // check if the tile standing on is landable, if so, then make the wall tile landable.
      // without this check, player will fall between two tiles.
      if (
        this.isCollidingLeftWall &&
        positionX + 1 !== "undefined" &&
        tileArrOfCurrentLevel[positionX + 1][positionY] == 1
      ) {
        this.landOnPlatform(player, positionY);
      }
    }

    // check if the player is colliding wall on player's top side
    if (
      player.y > SQUARE_SIDE * positionY + 0.5 * SQUARE_SIDE &&
      player.y < SQUARE_SIDE * positionY + SQUARE_SIDE
    ) {
      // if colliding on the wall of player's left side, then player cannot move to left.
      this.isCollidingTopWall = true;
      // Bonus To Do: Cannot jump through
    }
  }

  // Collect coins
  isCollidingTreasure(player, coinOfCurrentLevel) {
    coinOfCurrentLevel.forEach((coin, index) => {
      if (
        player.x >= coin.x - (1 / 2) * SQUARE_SIDE &&
        player.x <= coin.x + (1 / 2) * SQUARE_SIDE &&
        player.y >= coin.y - (1 / 2) * SQUARE_SIDE &&
        player.y <= coin.y + (1 / 2) * SQUARE_SIDE
      ) {
        coinOfCurrentLevel.splice(index, 1);
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

  // Collect fruits
  isCollidingFruit(player, fruitsOfCurrentLevel) {
    fruitsOfCurrentLevel.forEach((fruit, index) => {
      if (
        player.x >= fruit.x - (1 / 2) * SQUARE_SIDE &&
        player.x <= fruit.x + (1 / 2) * SQUARE_SIDE &&
        player.y >= fruit.y - (1 / 2) * SQUARE_SIDE &&
        player.y <= fruit.y + (1 / 2) * SQUARE_SIDE
      ) {
        fruitsOfCurrentLevel.splice(index, 1);
        this.amountOfFruits++;
        FRUIT_COLLECTION.innerText = this.amountOfFruits;
      }
    });
  }

  // Lose one life if touched by enemies
  isCollidingEnemy(player, enemiesOfCurrentLevel) {
    enemiesOfCurrentLevel.forEach((enemy) => {
      if (
        player.x >= enemy.x - (1 / 2) * SQUARE_SIDE &&
        player.x <= enemy.x + (1 / 2) * SQUARE_SIDE &&
        player.y >= enemy.y - (1 / 3) * SQUARE_SIDE &&
        player.y <= enemy.y + 1 * SQUARE_SIDE
      ) {
        player.x = 0;
        player.y = STARTING_FLOOR;
        if (this.amountOfLives > 0) {
          this.amountOfLives--;
        }
        LIFE.innerText = this.amountOfLives;
        player.resurrect();
      }
    });
  }

  // Lose one life if fallen into water
  isCollidingWater(player) {
    if (player.y > WATER_FLOOR - SQUARE_SIDE) {
      player.velocity = 0;
      if (this.amountOfLives > 0) {
        this.amountOfLives--;
      }
      LIFE.innerText = this.amountOfLives;
      player.resurrect();
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

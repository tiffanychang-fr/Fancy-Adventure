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
    this.leftTileType = 0;
    this.topTileType = 0;
    this.rightTileType = 0;
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

    // this.player.movePlayer();
    this.fruits.drawFruits();
    this.enemies.drawEnemies();
    // this.enemies.moveEnemy(this.player);

    // Player-Platform Collision check
    this.TileTypeCheck(this.player);
    this.isCollidingFruit(this.player, this.fruits);
    this.isCollidingEnemy(this.player, this.enemies);
    this.isCollidingWater(this.player);
    this.player.movePlayer(this.isCollidingLeftWall, this.isCollidingRightWall);
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
      player.y + player.height <= SQUARE_SIDE * (positionY + 1.15)
    ) {
      this.landOnPlatform(player, positionY);
    }

    // if (
    //   player.x >= SQUARE_SIDE * positionX - (2 / 3) * player.width &&
    //   player.x <= SQUARE_SIDE * positionX + (2 / 3) * player.width &&
    //   player.y + player.height >= SQUARE_SIDE * (positionY + 1) &&
    //   player.y + player.height <= SQUARE_SIDE * (positionY + 1.15)
    // ) {
    //   this.landOnPlatform(player, positionY);
    // }

    // leftTileType = this.map.tiles[positionX - 1][positionY];
    // rightTileType = this.map.tiles[positionX + 1][positionY];
    // topTileType = this.map.tiles[positionX][positionY - 1];
    // console.log(leftTileType, topTileType, rightTileType);

    // check if left side is free
    // if (leftTileType == 2) {
    //   if (this.isCollidingLeftTileType2(player, positionX, positionY)) {
    //     console.log("I am colliding left wall");
    //     // player.x = SQUARE_SIDE * positionX - 0.3 * player.width;
    //   }
    // console.log("left side is blocked");
    // }

    // check if right side is free
    // if (rightTileType == 2) {
    //   if (this.isCollidingRightTileType2(player, positionX)) {
    //     console.log("I am colliding right wall");
    //     // player.x = SQUARE_SIDE * positionX + 0.3 * player.width;
    //     console.log(player, SQUARE_SIDE * positionX + 0.3 * player.width);
    //   }
    // console.log("right side is blocked");
    // }

    // check if top is free
    // if (topTileType == 2) {
    //   if (this.isCollidingTopTileType2(player, positionX, positionY)) {
    //     player.y = SQUARE_SIDE * positionY;
    //   }
    // console.log("top side is blocked");
    // }

    // following is hard code for testing the function
    // return (
    //   player.x >= SQUARE_SIDE * 2 - (2 / 3) * player.width &&
    //   player.x <= SQUARE_SIDE * 2 + (2 / 3) * player.width &&
    //   player.y + player.height >= SQUARE_SIDE * 11 &&
    //   player.y + player.height <= SQUARE_SIDE * 12 + 5
    // );
  }

  // this method has issue, try to fix it
  // If colliding on type 2 tile
  // isCollidingLeftTile(player, positionX) {
  //   return player.x <= SQUARE_SIDE * positionX - 0.3 * player.width
  //     ? true
  //     : false;
  //   // player.x = SQUARE_SIDE * positionX - 0.3 * player.width;
  // }

  // isCollidingRightTile(player, positionX) {
  //   return player.x >= SQUARE_SIDE * positionX + 0.3 * player.width
  //     ? true
  //     : false;
  //   // player.x = SQUARE_SIDE * positionX + 0.3 * player.width;
  // }

  // isCollidingTopTile(player, positionY) {
  //   return player.y <= positionY + 0.3 ? true : false;
  //   // player.y = SQUARE_SIDE * positionY;
  // }

  TileTypeCheck(player) {
    this.positionX = Math.floor(player.rightFoot / SQUARE_SIDE);
    this.positionY = Math.floor(player.y / SQUARE_SIDE);
    let tileType = this.map.tiles[this.positionX][this.positionY];

    // console.log(player.leftFoot, player.rightFoot, tileType);
    // console.log(this.positionX, this.positionY, tileType);

    // this.neighborTileType(this.positionX, this.positionY);

    // if (player.x <= SQUARE_SIDE * this.positionX - 0.3 * player.width) {
    //   this.isCollidingLeftTile = true;
    // }
    // if (player.y <= this.positionY + 0.3) {
    //   this.isCollidingTopTile = true;
    // }
    // if (player.x >= SQUARE_SIDE * this.positionX + 0.3 * player.width) {
    //   this.isCollidingRightTile = true;
    // }

    // console.log(
    //   this.isCollidingLeftTile,
    //   this.isCollidingTopTile,
    //   this.isCollidingRightTile
    // );
    // 0: can fall; 1: can land on; 2: cannot jump through
    if (tileType == 0) {
      this.isCollidingLeftWall = false;
      this.isCollidingRightWall = false;
      // console.log("type 0");
    } else if (tileType == 1) {
      // console.log("tile 1");
      this.isCollidingLeftWall = false;
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
      // console.log(player.y, this.positionY);
      // console.log(this.isCollidingTopWall);

      // console.log(this.isCollidingRightWall, this.isCollidingLeftWall);

      // console.log("tile 2");
      // cannot enter to this tile
      // this.isCollidingTileType2(player, collisionX, collisionY);
    }
  }

  neighborTileType(positionX, positionY) {
    // check left, right, top tile type
    if (positionX == 0) {
      this.leftTileType = 2;
      this.rightTileType = this.map.tiles[positionX + 1][positionY];
    } else if (positionX == this.map.tiles.length) {
      this.leftTileType = this.map.tiles[positionX - 1][positionY];
      this.rightTileType = 2;
    } else if (positionX >= 1 && positionX < this.map.tiles.length) {
      this.leftTileType = this.map.tiles[positionX - 1][positionY];
      this.rightTileType = this.map.tiles[positionX + 1][positionY];
    }

    if (positionY == 0) {
      this.topTileType = 2;
    } else {
      this.topTileType = this.map.tiles[positionX][positionY - 1];
    }
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
        player.y = STARTING_FLOOR;
        this.amountOfLives--;
        LIFE.innerText = this.amountOfLives;
        player.resurrect();

        // console.log("life loss");
      }
    });
  }

  isCollidingWater(player) {
    if (player.y > WATER_FLOOR - SQUARE_SIDE) {
      player.velocity = 0;
      player.resurrect();
    }
  }

  // only for checking the tile position
  drawGrid() {
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

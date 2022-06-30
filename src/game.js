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
    this.TileTypeCheck(this.player);
    // this.isCollidingOnPlatform(this.player);
    this.isCollidingFruit(this.player, this.fruits);
    this.isCollidingEnemy(this.player, this.enemies);
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
      player.x >= SQUARE_SIDE * positionX - (2 / 3) * player.width &&
      player.x <= SQUARE_SIDE * positionX + (2 / 3) * player.width &&
      player.y + player.height >= SQUARE_SIDE * (positionY + 1) &&
      player.y + player.height <= SQUARE_SIDE * (positionY + 1.15)
    ) {
      this.landOnPlatform(player, positionY);
    }

    // check left, right, top tile type
    // check if there is left || right || top tile
    let leftTileType, rightTileType, topTileType;
    if (positionX == 0) {
      leftTileType = 2;
      rightTileType = this.map.tiles[positionX + 1][positionY];
    } else if (positionX == this.map.tiles.length) {
      leftTileType = this.map.tiles[positionX - 1][positionY];
      rightTileType = 2;
    } else if (positionX >= 1 && positionX < this.map.tiles.length) {
      leftTileType = this.map.tiles[positionX - 1][positionY];
      rightTileType = this.map.tiles[positionX + 1][positionY];
    }

    if (positionY == 0) {
      topTileType = 2;
    } else {
      topTileType = this.map.tiles[positionX][positionY - 1];
    }

    // leftTileType = this.map.tiles[positionX - 1][positionY];
    // rightTileType = this.map.tiles[positionX + 1][positionY];
    // topTileType = this.map.tiles[positionX][positionY - 1];
    // console.log(leftTileType, rightTileType, topTileType);

    // check if left side is free
    if (leftTileType == 0 || leftTileType == 1) {
      return;
      // console.log("left side is free");
    } else if (leftTileType == 2) {
      if (this.isCollidingLeftTileType2(player, positionX, positionY)) {
        // console.log("I am colliding left wall");
        // player.x = SQUARE_SIDE * positionX - 0.3 * player.width;
      }
      // console.log("left side is blocked");
    }

    // check if right side is free
    if (rightTileType == 0 || rightTileType == 1) {
      return;
      // console.log("right side is free");
    } else if (rightTileType == 2) {
      if (this.isCollidingRightTileType2(player, positionX, positionY)) {
        // console.log("I am colliding left wall");
        // player.x = SQUARE_SIDE * positionX + 0.3 * player.width;
      }
      // console.log("right side is blocked");
    }

    // check if top is free
    if (topTileType == 2) {
      if (this.isCollidingTopTileType2(player, positionX, positionY)) {
        player.y = SQUARE_SIDE * positionY;
      }
      // console.log("top side is blocked");
    }

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
  isCollidingLeftTileType2(player, positionX, positionY) {
    player.x <= SQUARE_SIDE * positionX - 0.3 * player.width ? true : false;
    // player.x = SQUARE_SIDE * positionX - 0.3 * player.width;
  }

  isCollidingRightTileType2(player, positionX, positionY) {
    player.x <= SQUARE_SIDE * positionX + 0.3 * player.width ? true : false;
    // player.x = SQUARE_SIDE * positionX + 0.3 * player.width;
  }

  isCollidingTopTileType2(player, positionX, positionY) {
    player.y <= positionY + 0.3 ? true : false;
    // player.y = SQUARE_SIDE * positionY;
  }

  TileTypeCheck(player) {
    let positionX = Math.floor(
      (player.x + (2 / 3) * player.width) / SQUARE_SIDE
    );
    let positionY = Math.floor(
      (player.y + (2 / 3) * player.width) / SQUARE_SIDE
    );
    let tileType = this.map.tiles[positionX][positionY];
    // console.log(positionX, positionY, tileType);

    // 0: can fall; 1: can land on; 2: cannot jump through
    if (tileType == 0) {
      return;
      // console.log("type 0");
    } else if (tileType == 1) {
      // console.log("tile 1");
      this.isCollidingTileType1(player, positionX, positionY);
    } else if (tileType == 2) {
      return;
      // console.log("tile 2");
      // cannot enter to this tile
      // this.isCollidingTileType2(player, collisionX, collisionY);
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

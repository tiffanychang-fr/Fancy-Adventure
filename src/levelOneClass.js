class LevelOne {
  constructor() {
    this.level = new Level();
    this.map = new Map();
    this.treasures = new Treasure();
    this.fruits = new Fruits();
    this.enemies = new Enemies();
    this.flag = new Flag();
    this.missionCompleted = false;
    this.reachWinPoint = false;
  }

  preload() {
    this.level.preload();
    this.treasures.preload();
    this.fruits.preload();
    this.enemies.preload();
  }

  play() {
    const levelOneTiles = this.map.levelOneTiles;
    const coin_levelOne = this.treasures.coin_levelOne;
    const fruitArray_levelOne = this.fruits.fruitArray_levelOne;
    const enemyArray_levelOne = this.enemies.enemyArray_levelOne;
    this.level.play(
      "level 1",
      levelOneTiles,
      coin_levelOne,
      fruitArray_levelOne,
      enemyArray_levelOne
    );
    this.treasures.drawTreasures();
    this.fruits.drawFruits();
    this.enemies.drawEnemies();
    this.restart();

    // show red flag when mission of the level is finished
    if (this.missionCompleted == true) {
      this.flag.showFlag();
    }

    this.missionCompletedCheck();
    this.isCollidingWinPoint(this.level.player);
  }

  restart() {
    if (this.level.amountOfLives == 0) {
      MISSION.innerText = `GAME OVER...💫 Do you want to restart❓ Press ENTER👈`;
      RICHNESS.innerText = ``;
      MISSION_COMPLETED.innerText = ``;
      this.level.player.freeze();
      this.reset();
    }
  }

  reset() {
    if (keyCode === ENTER_KEY) {
      this.level.player.unfreeze();
      this.fruits.restart();
      this.treasures.restart();
      this.level.amountOfCoins = 0;
      this.level.amountOfFruits = 0;
      this.level.amountOfLives = 3;
      COIN.innerText = this.level.amountOfCoins;
      FRUIT_COLLECTION.innerText = this.level.amountOfFruits;
      LIFE.innerText = this.level.amountOfLives;
    }
  }

  // Check if level mission is completed
  missionCompletedCheck() {
    if (
      this.level.amountOfFruits >= 3 &&
      this.level.amountOfCoins >= 3 &&
      this.level.amountOfLives != 0
    ) {
      MISSION_COMPLETED.innerText = ` ✅`;
      this.missionCompleted = true;
    } else {
      this.missionCompleted = false;
    }
  }

  // When mission is completed, win point shall appear in order to go to next level
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

  keyPressed() {
    this.level.keyPressed();
  }
}

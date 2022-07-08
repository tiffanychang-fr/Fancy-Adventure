class LevelThree {
  constructor() {
    this.level = new Level();
    this.map = new Map();
    this.treasures = new Treasure();
    this.fruits = new Fruits();
    this.enemies = new Enemies();
    this.flag = new Flag();
    this.gameJustStarted = true;
    this.hasDiedfromCurrentLevel = false;
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
    const levelThreeTiles = this.map.levelThreeTiles;
    const coin_levelThree = this.treasures.coin_levelThree;
    const fruitArray_levelThree = this.fruits.fruitArray_levelThree;
    const enemyArray_levelThree = this.enemies.enemyArray_levelThree;
    this.level.play(
      "level 3",
      levelThreeTiles,
      coin_levelThree,
      fruitArray_levelThree,
      enemyArray_levelThree
    );
    this.treasures.drawTreasures();
    this.fruits.drawFruits();
    this.enemies.drawEnemies();
    this.start();
    setTimeout(() => {
      this.gameJustStarted = false;
    }, 1000);
    this.restart();
    // show red flag when mission of the level is finished
    if (this.missionCompleted == true) {
      this.flag.showFlag();
    }

    this.missionCompletedCheck();
    this.isCollidingWinPoint(this.level.player);
  }

  start() {
    if (this.gameJustStarted == true && this.hasDiedfromCurrentLevel == false) {
      this.level.amountOfCoins = 0;
      this.level.amountOfFruits = 0;
      COIN.innerText = this.level.amountOfCoins;
      FRUIT_COLLECTION.innerText = this.level.amountOfFruits;
      RICHNESS.innerText = ``;
      MISSION_COMPLETED.innerText = ``;
    }
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
      this.level.amountOfFruits >= 6 &&
      this.level.amountOfCoins >= 6 &&
      this.level.amountOfLives != 0
    ) {
      MISSION_COMPLETED.innerText = ` ✅`;
      this.missionCompleted = true;
    } else {
      this.missionCompleted = false;
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

  keyPressed() {
    this.level.player.keyPressed();
  }
}

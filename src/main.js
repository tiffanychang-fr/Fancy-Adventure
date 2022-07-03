// Initializing the level classes
const levelOne = new LevelOne();
const levelTwo = new LevelTwo();
const levelThree = new LevelThree();
const levelFour = new LevelFour();

// Initializing the level
let levelOneCompleted = false;
let levelTwoCompleted = false;
let levelThreeCompleted = false;
let levelFourCompleted = false;

function setup() {
  const cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  clear();

  // Level Missions
  if (level === "level 1") {
    MISSION.innerText = `Mission 1 : Collect at least 3 fruits and 3 coins.. Do not touch the balloons.`;
  } else if (level === "level 2") {
    MISSION.innerText = `Mission 2 : Collect 5 fruits and 3 coins. Do not touch the balloons.`;
  } else if (level === "level 3") {
    MISSION.innerText = `Mission 3 : Collect 6 fruits and 6 coins. Do not touch the balloons.`;
  } else if (level === "level 4") {
    MISSION.innerText = `Mission 4 : Collect 8 fruits and 8 coins. Do not touch the balloons.`;
  }

  // Level 1: If the player completes mission and touch the win points then move on to level 2
  if (levelOne.missionCompleted == true && levelOne.reachWinPoint == true) {
    levelOneCompleted = true;
    level = "level 2";
  }

  if (levelTwo.missionCompleted == true && levelTwo.reachWinPoint == true) {
    levelOneCompleted = true;
    level = "level 3";
  }

  if (levelThree.missionCompleted == true && levelThree.reachWinPoint == true) {
    levelOneCompleted = true;
    level = "level 4";
  }

  if (level === "level 1") {
    levelOne.play();
  } else if (level === "level 2") {
    levelTwo.play();
  } else if (level === "level 3") {
    levelThree.play();
  } else if (level === "level 4") {
    levelFour.play();
  }
}

function preload() {
  levelOne.preload();
  levelTwo.preload();
  levelThree.preload();
  levelFour.preload();
}

function keyPressed() {
  levelOne.keyPressed();
  levelTwo.keyPressed();
  levelThree.keyPressed();
  levelFour.keyPressed();
}

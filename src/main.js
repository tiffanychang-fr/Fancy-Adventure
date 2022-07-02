// Initializing the level classes
const levelOne = new LevelOne();
const levelTwo = new LevelTwo();

// Initializing the level
let levelOneCompleted = false;
let levelTwoCompleted = false;

function setup() {
  const cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  clear();

  // Level Missions
  if (level === "level 1") {
    MISSION.innerText = `Mission 1 : Collect all the fruits and do not touch the balloons`;
  } else if (level === "level 2") {
    MISSION.innerText = `Mission 2 : Collect all the fruits and do not touch the balloons`;
  }

  // Level 1: If the player completes mission and touch the win points then move on to level 2
  if (levelOne.missionCompleted == true && levelOne.reachWinPoint == true) {
    levelOneCompleted = true;
    level = "level 2";
    levelTwo.amountOfFruit = 0;
    FRUIT_COLLECTION.innerText = this.amountOfFruit;
  }

  if (level === "level 1") {
    levelOne.play();
  } else if (level === "level 2") {
    levelTwo.play();
  }
}

function preload() {
  levelOne.preload();
  levelTwo.preload();
}

function keyPressed() {
  levelOne.keyPressed();
  levelTwo.keyPressed();
}

// Initializing the level classes
const levelOne = new LevelOne();
const levelTwo = new LevelTwo();
const levelThree = new LevelThree();
const levelFour = new LevelFour();

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  // restartButton = createButton("Restart");
  // restartButton.position(0, 0);
}

function draw() {
  clear();

  // Level Missions
  if (level === "level 1") {
    MISSION.innerText = `Mission 1 : Collect at least 3 fruits and 3 coins. Do not touch the balloons.`;
  } else if (level === "level 2") {
    MISSION.innerText = `Mission 2 : Collect 5 fruits and 3 coins. Do not touch the balloons.`;
  } else if (level === "level 3") {
    MISSION.innerText = `Mission 3 : Collect 6 fruits and 6 coins. Do not touch the balloons.`;
  } else if (level === "level 4") {
    MISSION.innerText = `Mission 4 : Collect 8 fruits and 8 coins. Do not touch the balloons.`;
  }

  // Level 1: If the player completes mission and touch the win points then move on to level 2
  if (levelOne.missionCompleted == true && levelOne.reachWinPoint == true) {
    level = "level 2";
  }

  if (levelTwo.missionCompleted == true && levelTwo.reachWinPoint == true) {
    level = "level 3";
  }

  if (levelThree.missionCompleted == true && levelThree.reachWinPoint == true) {
    level = "level 4";
  }

  // Restart from level 1
  if (levelFour.missionCompleted == true) {
    if (keyCode === ENTER_KEY) {
      level = "level 1";

      levelOne.reset();
      levelOne.player.resurrect();
      levelOne.missionCompleted = false;
      levelOne.reachWinPoint = false;

      levelTwo.reset();
      levelTwo.player.resurrect();
      levelTwo.missionCompleted = false;
      levelTwo.reachWinPoint = false;

      levelThree.reset();
      levelThree.player.resurrect();
      levelThree.missionCompleted = false;
      levelThree.reachWinPoint = false;

      levelFour.reset();
      levelFour.player.resurrect();
      levelFour.missionCompleted = false;
      levelFour.reachWinPoint = false;
    }
  }

  // play the game by level
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
  bgm = loadSound("assets/music/letsGo.mp3");
}

function keyPressed() {
  levelOne.keyPressed();
  levelTwo.keyPressed();
  levelThree.keyPressed();
  levelFour.keyPressed();
}

// Background Music Event
soundButton.addEventListener("click", () => {
  if (volume === 0) {
    soundButton.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
    volume = 0.1;
    bgm.loop();
    bgm.play();
    bgm.setVolume(volume);
  } else if (volume === 0.1) {
    soundButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    volume = 0.2;
    bgm.setVolume(volume);
  } else if (volume === 0.2) {
    soundButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    volume = 0;
    bgm.stop();
  }
});

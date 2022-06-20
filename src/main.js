const game = new Game();

function setup() {
  const cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  cnv.position(70, 80);
  // cnv.position((windowWidth - CANVAS_WIDTH) / 2, 80);
}

function draw() {
  clear();
  game.play();
  // animation(playerAnimation, 30, 230);
  // animation(dinoAnimation, 30, 230);
  // animation(mushroomAnimation, 300, 100);
  // animation(coinAnimation, 80, 200);
}

function preload() {
  game.preload();

  //loading spritesheets
  // player = loadSpriteSheet("./assets/player/finn.png", 32, 32, 24);
  // dino = loadSpriteSheet("./assets/player/dinoGreen.png", 24.1, 24, 24);
  // mushroom = loadSpriteSheet("./assets/enemy/mushroom_f.png", 24, 24, 4);
  // coin = loadSpriteSheet("./assets/objects/coin.png", 16, 16, 12);

  //loading animations
  // playerAnimation = loadAnimation(player);
  // dinoAnimation = loadAnimation(dino);
  // mushroomAnimation = loadAnimation(mushroom);
  // coinAnimation = loadAnimation(coin);
}

function keyPressed() {
  game.keyPressed();
}

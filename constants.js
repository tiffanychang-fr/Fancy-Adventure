// BACKGROUND
const CANVAS_SIZE = 1.5;
const CANVAS_WIDTH = 960 * CANVAS_SIZE;
const CANVAS_HEIGHT = 608 * CANVAS_SIZE;
const SQUARE_SIDE = 32 * CANVAS_SIZE;
const STARTING_FLOOR = 416 * CANVAS_SIZE;
const WIN_POINT_X = 928 * CANVAS_SIZE;
const WIN_POINT_Y = 416 * CANVAS_SIZE;
const WATER_FLOOR = CANVAS_HEIGHT * CANVAS_SIZE;
const LINE_COLOR = "#383838";

// KEYS
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;
const SPACE_BAR = 32;
const ENTER_KEY = 13;

// VARIABLES
const GRAVITY = 0.3;
const GRAVITY_IN_WATER = 0.1;
let level = "level 1";

// COIN
const COIN = document.querySelector(".coin span");

// FRUIT COLLECTION
const FRUIT_COLLECTION = document.querySelector(".fruit-collection span");

// LIFE
const LIFE = document.querySelector(".life span");

// SOUND BUTTON
let volume = 0;
let bgm;
const soundButton = document.querySelector(".soundButton");

// SUBTITLE
INSTRUCTION = document.querySelector(".player-instruction");
MISSION = document.querySelector(".mission-info");
RICHNESS = document.querySelector(".mission .coin-emoji");
MISSION_COMPLETED = document.querySelector(".mission .mission-completed-emoji");

// OBJECT ANIMATIONS
// let coin;
// let coinAnimation;

// let restartButton;

// BACKGROUND
const CANVAS_SIZE = 1.5;
const CANVAS_WIDTH = 960 * CANVAS_SIZE;
const CANVAS_HEIGHT = 608 * CANVAS_SIZE;
const SQUARE_SIDE = 32 * CANVAS_SIZE;
const STARTING_FLOOR = 416 * CANVAS_SIZE;
const WATER_FLOOR = CANVAS_HEIGHT * CANVAS_SIZE;

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

// FRUIT COLLECTION
const FRUIT_COLLECTION = document.querySelector(".fruit-collection span");

// LIFE
const LIFE = document.querySelector(".life span");

//
LEVEL1_RULE = document.querySelector(".level1-rule span");

// // PLAYER ANIMATIONS
// let player;
// let playerAnimation;

// // ENEMY ANIMATIONS
// let mushroom;
// let mushroomAnimation;

// // OBJECT ANIMATIONS
let coin;
let coinAnimation;

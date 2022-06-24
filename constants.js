// BACKGROUND
const CANVAS_SIZE = 1.5;
const CANVAS_WIDTH = 960 * CANVAS_SIZE;
const CANVAS_HEIGHT = 512 * CANVAS_SIZE;

// PLATFORMS
const FIRST_PLATFORM_FROM_TOP = 16 * 9 * CANVAS_SIZE;
const SECOND_PLATFORM_FROM_TOP = 16 * 11 * CANVAS_SIZE;
const THIRD_PLATFORM_FROM_TOP = 16 * 13 * CANVAS_SIZE;
const FOURTH_PLATFORM_FROM_TOP = 16 * 15 * CANVAS_SIZE;
const FIVTH_PLATFORM_FROM_TOP = 16 * 17 * CANVAS_SIZE;
const SIXTH_PLATFORM_FROM_TOP = 16 * 19 * CANVAS_SIZE;
const SEVENTH_PLATFORM_FROM_TOP = 16 * 21 * CANVAS_SIZE;
const EIGHTH_PLATFORM_FROM_TOP = 16 * 23 * CANVAS_SIZE;
const NINTH_PLATFORM_FROM_TOP = 16 * 25 * CANVAS_SIZE;
const WATER_LEVEL = 16 * 27 * CANVAS_SIZE;

const FIRST_PLATFORM_FROM_LEFT = 0;
const SECOND_PLATFORM_FROM_LEFT = 16 * 2 * CANVAS_SIZE;
const THIRD_PLATFORM_FROM_LEFT = 16 * 4 * CANVAS_SIZE;
const FOURTH_PLATFORM_FROM_LEFT = 16 * 6 * CANVAS_SIZE;
const FIVTH_PLATFORM_FROM_LEFT = 16 * 8 * CANVAS_SIZE;
const SIXTH_PLATFORM_FROM_LEFT = 16 * 10 * CANVAS_SIZE;
const SEVENTH_PLATFORM_FROM_LEFT = 16 * 12 * CANVAS_SIZE;
const EIGHTH_PLATFORM_FROM_LEFT = 16 * 14 * CANVAS_SIZE;
const NINTH_PLATFORM_FROM_LEFT = 16 * 16 * CANVAS_SIZE;
const TENTH_PLATFORM_FROM_LEFT = 16 * 18 * CANVAS_SIZE;
const ELEVENTH_PLATFORM_FROM_LEFT = 16 * 20 * CANVAS_SIZE;
const TWELFTH_PLATFORM_FROM_LEFT = 16 * 22 * CANVAS_SIZE;
const THIRTEENTH_PLATFORM_FROM_LEFT = 16 * 24 * CANVAS_SIZE;
const FOURTEENTH_PLATFORM_FROM_LEFT = 16 * 26 * CANVAS_SIZE;
const FIVTEENTH_PLATFORM_FROM_LEFT = 16 * 28 * CANVAS_SIZE;
const SIXTEENTH_PLATFORM_FROM_LEFT = 16 * 30 * CANVAS_SIZE;
const SEVENTEENTH_PLATFORM_FROM_LEFT = 16 * 32 * CANVAS_SIZE;
const EIGHTEENTH_PLATFORM_FROM_LEFT = 16 * 34 * CANVAS_SIZE;
const NINETEENTH_PLATFORM_FROM_LEFT = 16 * 36 * CANVAS_SIZE;
const TWENTIETH_PLATFORM_FROM_LEFT = 16 * 38 * CANVAS_SIZE;
const TWENTYFIRST_PLATFORM_FROM_LEFT = 16 * 40 * CANVAS_SIZE;
const TWENTYSECONDTH_PLATFORM_FROM_LEFT = 16 * 42 * CANVAS_SIZE;
const TWENTYTHIRD_PLATFORM_FROM_LEFT = 16 * 42 * CANVAS_SIZE;
const TWENTYFOURTH_PLATFORM_FROM_LEFT = 16 * 42 * CANVAS_SIZE;
const TWENTYFIFTH_PLATFORM_FROM_LEFT = 16 * 42 * CANVAS_SIZE;
const TWENTYSIXTH_PLATFORM_FROM_LEFT = 16 * 42 * CANVAS_SIZE;
const TWENTYSEVENTH_PLATFORM_FROM_LEFT = 16 * 42 * CANVAS_SIZE;
const TWENTYEIGHTH_PLATFORM_FROM_LEFT = 16 * 42 * CANVAS_SIZE;
const TWENTYNINTH_PLATFORM_FROM_LEFT = 16 * 42 * CANVAS_SIZE;
const THIRTIETH_PLATFORM_FROM_LEFT = 16 * 38 * CANVAS_SIZE;

// KEYS
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;
const SPACE_BAR = 32;
const ENTER_KEY = 13;

// VARIABLES

const GRAVITY = 0.3;

// // PLAYER ANIMATIONS
// let player;
// let playerAnimation;

// // ENEMY ANIMATIONS
// let mushroom;
// let mushroomAnimation;

// // OBJECT ANIMATIONS
let coin;
let coinAnimation;

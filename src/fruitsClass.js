class Fruits {
  constructor() {
    // Level 1 fruits objects
    this.fruitArray_levelOne = [];
    this.grape = new Grape(340, 450, 9.2, 9.4);
    this.grape2 = new Grape(960, 400, 8.2, 8.4);
    this.pear = new Pear(195, 330, 6.6, 6.8);
    this.pear2 = new Pear(1200, 185, 3.6, 3.8);
    this.plum = new Plum(145, 190, 3.7, 3.9);
    this.plum3 = new Plum(1105, 332, 6.7, 6.9);
    this.plum2 = new Plum(770, 480, 9.8, 10);
    this.apple = new Apple(1390, 330, 6.6, 6.8);
    this.orange = new Orange(435, 235, 4.8, 5);
    this.orange2 = new Orange(1295, 480, 9.8, 10);

    this.fruitArray_levelOne.push(this.grape);
    this.fruitArray_levelOne.push(this.grape2);
    this.fruitArray_levelOne.push(this.pear);
    this.fruitArray_levelOne.push(this.pear2);
    this.fruitArray_levelOne.push(this.plum);
    this.fruitArray_levelOne.push(this.plum2);
    this.fruitArray_levelOne.push(this.plum3);
    this.fruitArray_levelOne.push(this.apple);
    this.fruitArray_levelOne.push(this.orange);
    this.fruitArray_levelOne.push(this.orange2);

    // Level 2 fruits objects
    this.fruitArray_levelTwo = [];
    this.grape = new Grape(340, 335, 6.7, 6.9);
    this.grape2 = new Grape(960, 328, 6.7, 6.9);
    this.purple_grape = new Grape2(672, 380, 7.8, 8.0);
    this.green_grape = new Grape3(960, 630, 13.1, 13.2);
    this.pear = new Pear(195, 280, 5.7, 5.9);
    this.pear2 = new Pear(1345, 280, 5.7, 5.9);
    this.plum1 = new Plum(1055, 332, 6.7, 6.9);
    this.apple = new Apple(240, 580, 11.9, 12.1);
    this.orange = new Orange(430, 235, 4.8, 5);
    this.orange2 = new Orange(865, 525, 10.8, 11);

    this.fruitArray_levelTwo.push(this.grape);
    this.fruitArray_levelTwo.push(this.grape2);
    this.fruitArray_levelTwo.push(this.purple_grape);
    this.fruitArray_levelTwo.push(this.green_grape);
    this.fruitArray_levelTwo.push(this.pear);
    this.fruitArray_levelTwo.push(this.pear2);
    this.fruitArray_levelTwo.push(this.plum1);
    this.fruitArray_levelTwo.push(this.apple);
    this.fruitArray_levelTwo.push(this.orange);
    this.fruitArray_levelTwo.push(this.orange2);

    // Level 3 fruits objects
    this.fruitArray_levelThree = [];
    this.grape = new Grape(340, 375, 7.7, 7.9);
    this.grape2 = new Grape(960, 328, 6.7, 6.9);
    this.purple_grape = new Grape2(145, 280, 5.8, 6.0);
    this.green_grape = new Grape3(910, 535, 11.1, 11.2);
    this.pear2 = new Pear(1345, 280, 5.7, 5.9);
    this.plum = new Plum(672, 380, 7.8, 8.0);
    this.plum2 = new Plum(1055, 470, 9.7, 9.9);
    this.apple = new Apple(240, 480, 9.9, 10.1);
    this.orange = new Orange(480, 480, 9.9, 10.1);
    this.orange2 = new Orange(865, 525, 10.8, 11);

    this.fruitArray_levelThree.push(this.grape);
    this.fruitArray_levelThree.push(this.grape2);
    this.fruitArray_levelThree.push(this.purple_grape);
    this.fruitArray_levelThree.push(this.green_grape);
    this.fruitArray_levelThree.push(this.pear2);
    this.fruitArray_levelThree.push(this.plum);
    this.fruitArray_levelThree.push(this.plum2);
    this.fruitArray_levelThree.push(this.apple);
    this.fruitArray_levelThree.push(this.orange);
    this.fruitArray_levelThree.push(this.orange2);

    // Level 4 fruits objects
    this.fruitArray_levelFour = [];

    this.grape = new Grape(340, 335, 6.7, 6.9);
    this.grape2 = new Grape(960, 230, 4.7, 4.9);
    this.green_grape = new Grape3(865, 525, 10.8, 11);
    this.purple_grape = new Grape2(672, 380, 7.8, 8.0);
    this.apple = new Apple(145, 300, 5.8, 6.0);
    this.pear = new Pear(1295, 280, 5.7, 5.9);
    this.pear2 = new Pear(240, 525, 10.9, 11.1);
    this.plum = new Plum(1055, 430, 8.9, 9.1);
    this.orange = new Orange(480, 480, 9.9, 10.1);
    this.orange2 = new Orange(815, 375, 7.8, 8);

    this.fruitArray_levelFour.push(this.grape);
    this.fruitArray_levelFour.push(this.grape2);
    this.fruitArray_levelFour.push(this.green_grape);
    this.fruitArray_levelFour.push(this.purple_grape);
    this.fruitArray_levelFour.push(this.apple);
    this.fruitArray_levelFour.push(this.pear);
    this.fruitArray_levelFour.push(this.pear2);
    this.fruitArray_levelFour.push(this.plum);
    this.fruitArray_levelFour.push(this.orange);
    this.fruitArray_levelFour.push(this.orange2);
  }

  preload() {
    this.fruitArray_levelOne.forEach((fruit) => fruit.preload());
    this.fruitArray_levelTwo.forEach((fruit) => fruit.preload());
    this.fruitArray_levelThree.forEach((fruit) => fruit.preload());
    this.fruitArray_levelFour.forEach((fruit) => fruit.preload());
  }

  drawFruits() {
    if (level === "level 1") {
      this.fruitArray_levelOne.forEach((fruit) => fruit.drawFruit());
    } else if (level === "level 2") {
      this.fruitArray_levelTwo.forEach((fruit) => fruit.drawFruit());
    } else if (level === "level 3") {
      this.fruitArray_levelThree.forEach((fruit) => fruit.drawFruit());
    } else if (level === "level 4") {
      this.fruitArray_levelFour.forEach((fruit) => fruit.drawFruit());
    }
  }
}

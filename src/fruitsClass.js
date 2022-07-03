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
  }

  preload() {
    this.fruitArray_levelOne.forEach((fruit) => fruit.preload());
    this.fruitArray_levelTwo.forEach((fruit) => fruit.preload());
  }

  drawFruits() {
    if (level === "level 1") {
      this.fruitArray_levelOne.forEach((fruit) => fruit.drawFruit());
    } else if (level === "level 2") {
      this.fruitArray_levelTwo.forEach((fruit) => fruit.drawFruit());
    }
  }
}

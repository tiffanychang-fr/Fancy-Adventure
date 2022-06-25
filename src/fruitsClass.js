class Fruits {
  constructor() {
    this.fruitArray = [];

    this.grape = new Grape(340, 450);
    this.grape2 = new Grape(960, 400);
    this.pear = new Pear(195, 330);
    this.pear2 = new Pear(1200, 185);
    this.plum = new Plum(145, 190);
    this.plum2 = new Plum(1105, 332);
    this.plum3 = new Plum(770, 480);
    this.apple = new Apple(1390, 330);
    this.orange = new Orange(435, 235);
    this.orange2 = new Orange(1295, 480);

    this.fruitArray.push(this.grape);
    this.fruitArray.push(this.grape2);
    this.fruitArray.push(this.pear);
    this.fruitArray.push(this.pear2);
    this.fruitArray.push(this.plum);
    this.fruitArray.push(this.plum2);
    this.fruitArray.push(this.plum3);
    this.fruitArray.push(this.apple);
    this.fruitArray.push(this.orange);
    this.fruitArray.push(this.orange2);
  }

  preload() {
    this.fruitArray.forEach((fruit) => fruit.preload());
  }

  drawFruits() {
    this.fruitArray.forEach((fruit) => fruit.drawFruit());
  }
}

class Fruits {
  constructor() {
    this.fruitArray = [];
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

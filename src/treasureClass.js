class Treasure {
  constructor() {
    // Level 1 coin objects
    this.coin_levelOne = [];

    this.coin1 = new Coin(290, 232, 4.8, 5);
    this.coin2 = new Coin(338, 234, 4.8, 5);

    this.coin3 = new Coin(960, 220, 4.7, 4.9);
    this.coin4 = new Coin(1009, 223, 4.6, 4.8);
    this.coin5 = new Coin(1058, 231, 4.7, 4.9);

    this.coin6 = new Coin(720, 525, 11, 11.2);
    this.coin7 = new Coin(770, 527, 11, 11.2);
    this.coin8 = new Coin(818, 529, 11, 11.2);
    this.coin9 = new Coin(143, 460, 9.6, 9.8);
    this.coin10 = new Coin(193, 452, 9.1, 9.6);

    this.coin_levelOne.push(this.coin1);
    this.coin_levelOne.push(this.coin2);
    this.coin_levelOne.push(this.coin3);
    this.coin_levelOne.push(this.coin4);
    this.coin_levelOne.push(this.coin5);
    this.coin_levelOne.push(this.coin6);
    this.coin_levelOne.push(this.coin7);
    this.coin_levelOne.push(this.coin8);
    this.coin_levelOne.push(this.coin9);
    this.coin_levelOne.push(this.coin10);

    // Level 2 coin objects
    this.coin_levelTwo = [];
    this.coin1 = new Coin(145, 378, 7.8, 8);
    this.coin2 = new Coin(195, 382, 7.8, 8);
    this.coin3 = new Coin(815, 328, 6.8, 7);
    this.coin4 = new Coin(865, 332, 6.8, 7);
    this.coin5 = new Coin(720, 675, 13.9, 14.1);
    this.coin6 = new Coin(770, 679, 13.9, 14.1);
    this.coin7 = new Coin(820, 681, 13.9, 14.1);
    this.coin8 = new Coin(1200, 430, 8.9, 9.1);
    this.coin9 = new Coin(288, 621, 12.9, 13.1);
    this.coin10 = new Coin(338, 623, 12.9, 13.1);

    this.coin_levelTwo.push(this.coin1);
    this.coin_levelTwo.push(this.coin2);
    this.coin_levelTwo.push(this.coin3);
    this.coin_levelTwo.push(this.coin4);
    this.coin_levelTwo.push(this.coin5);
    this.coin_levelTwo.push(this.coin6);
    this.coin_levelTwo.push(this.coin7);
    this.coin_levelTwo.push(this.coin8);
    this.coin_levelTwo.push(this.coin9);
    this.coin_levelTwo.push(this.coin10);

    // Level 3 coin objects
    this.coin_levelThree = [];

    this.coin1 = new Coin(45, 330, 6.8, 7);
    this.coin2 = new Coin(95, 332, 6.8, 7);
    this.coin3 = new Coin(815, 328, 6.8, 7);
    this.coin4 = new Coin(865, 332, 6.8, 7);
    this.coin5 = new Coin(768, 476, 9.9, 10.1);
    this.coin6 = new Coin(816, 478, 9.9, 10.1);
    this.coin7 = new Coin(865, 480, 9.9, 10.1);
    this.coin8 = new Coin(1250, 375, 7.7, 7.9);
    this.coin9 = new Coin(1345, 375, 7.7, 7.9);
    this.coin10 = new Coin(1390, 377, 7.7, 7.9);

    this.coin_levelThree.push(this.coin1);
    this.coin_levelThree.push(this.coin2);
    this.coin_levelThree.push(this.coin3);
    this.coin_levelThree.push(this.coin4);
    this.coin_levelThree.push(this.coin5);
    this.coin_levelThree.push(this.coin6);
    this.coin_levelThree.push(this.coin7);
    this.coin_levelThree.push(this.coin8);
    this.coin_levelThree.push(this.coin9);
    this.coin_levelThree.push(this.coin10);

    // Level 4 coin objects
    this.coin_levelFour = [];
    this.coin1 = new Coin(195, 385, 7.9, 8.1);
    this.coin2 = new Coin(815, 328, 6.8, 7);
    this.coin3 = new Coin(865, 332, 6.8, 7);
    this.coin4 = new Coin(768, 476, 9.9, 10.1);
    this.coin5 = new Coin(816, 478, 9.9, 10.1);
    this.coin6 = new Coin(865, 480, 9.9, 10.1);
    this.coin7 = new Coin(1250, 475, 9.8, 10);
    this.coin8 = new Coin(335, 615, 12.8, 13);
    this.coin9 = new Coin(383, 617, 12.8, 13);
    this.coin10 = new Coin(430, 619, 12.8, 13);

    this.coin_levelFour.push(this.coin1);
    this.coin_levelFour.push(this.coin2);
    this.coin_levelFour.push(this.coin3);
    this.coin_levelFour.push(this.coin4);
    this.coin_levelFour.push(this.coin5);
    this.coin_levelFour.push(this.coin6);
    this.coin_levelFour.push(this.coin7);
    this.coin_levelFour.push(this.coin8);
    this.coin_levelFour.push(this.coin9);
    this.coin_levelFour.push(this.coin10);
  }

  preload() {
    this.coin_levelOne.forEach((coin) => coin.preload());
    this.coin_levelTwo.forEach((coin) => coin.preload());
    this.coin_levelThree.forEach((coin) => coin.preload());
    this.coin_levelFour.forEach((coin) => coin.preload());
  }

  drawTreasures() {
    // this.coin_levelTwo.forEach((coin) => coin.drawCoin());
    if (level === "level 1") {
      this.coin_levelOne.forEach((coin) => coin.drawCoin());
    } else if (level === "level 2") {
      this.coin_levelTwo.forEach((coin) => coin.drawCoin());
    } else if (level === "level 3") {
      this.coin_levelThree.forEach((coin) => coin.drawCoin());
    } else if (level === "level 4") {
      this.coin_levelFour.forEach((coin) => coin.drawCoin());
    }
  }
}

class Flag {
  constructor() {
    this.x = WIN_POINT_X;
    this.y = WIN_POINT_Y;
  }

  showFlag() {
    textSize(40);
    text("👉", this.x - 4, this.y + 27);
  }

  congrats() {
    textSize(100);
    text("👑", this.x - 180, this.y - 450);
  }
}

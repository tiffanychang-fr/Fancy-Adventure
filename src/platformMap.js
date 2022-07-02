// Land on Platform => Collision check on each single platform
// If player collide to the platform, then set player.y to platform.top && set jump() to false && set jump count to 0

class Map {
  constructor() {
    // 0: can fall; 1: can land on; 2: cannot jump through
    this.levelOneTiles = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 1, 2, 0, 1, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 2, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 2, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],

      [0, 0, 0, 0, 0, 1, 2, 2, 2, 0, 0, 0, 1, 2, 0, 0, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],

      [0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],

      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 1, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 1, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],

      [0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 1, 2, 2, 2, 1, 2, 0, 0, 0, 1, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 1, 2, 2, 0, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],

      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
    ];

    this.levelTwoTiles = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2],

      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 2, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 1, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 2, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],

      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
    ];
  }
}

// Land on Platform => Collision check on each single platform
// If player collide to the platform, then set player.y to platform.top && set jump() to false && set jump count to 0

class Map {
  constructor() {
    this.lands = [
      // left-top: position x, position y
      [0, 14],
      [1, 5],
      [1, 13],
      [2, 5],
      [2, 12],
      [3, 5],
      [3, 8],
      [3, 12],
      [4, 8],
      [5, 7],
      [5, 12],
      [6, 6],
      [6, 12],
      [7, 6],
      [7, 12],
      [8, 6],
      [8, 12],
      [9, 6],
      [9, 12],
      [10, 6],
      [10, 13],
      [11, 6],
      [11, 13],
      [12, 6],
      [13, 6],
      [13, 12],
      [14, 6],
      [14, 10],
      [15, 6],
      [15, 9],
      [15, 12],
      [16, 6],
      [16, 9],
      [16, 12],
      [17, 6],
      [17, 9],
      [17, 12],
      [18, 6],
      [18, 12],
      [19, 6],
      [19, 14],
      [20, 6],
      [20, 11],
      [20, 14],
      [21, 6],
      [21, 11],
      [21, 14],
      [22, 6],
      [22, 8],
      [22, 14],
      [23, 6],
      [23, 8],
      [23, 12],
      [24, 6],
      [24, 12],
      [25, 5],
      [25, 12],
      [26, 5],
      [26, 9],
      [26, 14],
      [26, 5],
      [26, 9],
      [26, 13],
      [27, 5],
      [27, 9],
      [27, 11],
      [27, 13],
      [28, 8],
      [28, 14],
      [29, 8],
      [29, 14],
    ];

    this.cliffs = [
      // left-top: position x, position y
      [4, 12],
      [12, 13],
    ];
  }
}

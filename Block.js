class Block {
  constructor(coords){
    this.positions = coords;
  }
  
  moveLeft = () => {
    let possible = true;
    let possibleNewPositions = this.positions.map((coord) => {
      if( coord[0] - 1 < 0){
        possible = false;
      }
      return [Math.max(0, coord[0] -1), coord[1]]
    });

    if( possible ) {
      this.positions = possibleNewPositions;
    }
  }

  moveRight = () => {
    let possible = true;
    let possibleNewPositions = this.positions.map((coord) => {
      if( coord[0] + 1 > BOARD_CONSTANDS.WIDTH - 1){
        possible = false;
      }
      return [Math.min(BOARD_CONSTANDS.WIDTH -1, coord[0] +1), coord[1]];
    });
    if( possible ) {
      this.positions = possibleNewPositions;
    }
  }

  moveDown = () => {
    let possible = true;
    let possibleNewPositions = this.positions.map((coord) => {
      if( coord[1] + 1 > BOARD_CONSTANTS.HEIGHT - 1){
        possible = false;
      }
      return [coord[0], Math.max(coord[1] + 1, BOARD_CONSTANDS.HEIGHT + 1)];
    });
    if( possible ){
      this.positions = possibleNewPositions;
    }
  }
}
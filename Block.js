class Block {
  constructor(startX, startY){
    this.positions = [
      [startX, startY],
      [startX + 1, startY],
      [startX, startY + 1],
      [startX + 1, startY + 1]
    ];
    this.isMoveable = true;
    this.addEventListeners();
    this.blockID = Math.floor(Math.random()*(10**10)).toString();
  }

  getBlockID = () => {
    return this.blockID();
  }

  checkIsMoveable = () => {
    return this.isMoveable;
  }

  addEventListeners = () => {
    document.addEventListener('keydown', e => {
      if( e.keyCode === ARROW_KEY.DOWN && this.checkIsMoveable() ){
        this.moveDown();
        this.updateHTML();
      } else if ( e.keyCode === ARROW_KEY.LEFT && this.checkIsMoveable()) {
        this.moveLeft();
        this.updateHTML();
      } else if (e.keyCode === ARROW_KEY.RIGHT && this.checkIsMoveable()) {
        this.moveRight();
        this.updateHTML();
      }
    });
  }
  
  moveLeft = () => {
    if( this.checkIsMoveable() ){
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
  }

  moveRight = () => {
    if( this.checkIsMoveable() ){
      let possible = true;
      let possibleNewPositions = this.positions.map((coord) => {
        if( coord[0] + 1 > BOARD_CONSTANTS.WIDTH - 1){
          possible = false;
        }
        return [Math.min(BOARD_CONSTANTS.WIDTH -1, coord[0] +1), coord[1]];
      });
      if( possible ) {
        this.positions = possibleNewPositions;
      }
    }
  }

  moveDown = () => {

    let coordsAtBottom = this.positions.filter((cell) => cell[1] === BOARD_CONSTANTS.HEIGHT-1)[0];
    if(coordsAtBottom){
      this.isMoveable = false;
    }

    if( this.checkIsMoveable() ){
      let possible = true;
      let possibleNewPositions = this.positions.map((coord) => {
        if( coord[1] + 1 > BOARD_CONSTANTS.HEIGHT - 1){
          possible = false;
        }
        return [coord[0], Math.min(coord[1] + 1, BOARD_CONSTANTS.HEIGHT - 1)];
      });
      if( possible ){
        this.positions = possibleNewPositions;
      }
    }
  }

  addToGrid = () => {
    this.positions.map((coord) => {
      let cellID = 'cell-x' + coord[0] + '-y' + coord[1];
      document.getElementById(cellID).classList.add('cell-item-filled');
      document.getElementById(cellID).setAttribute('data-blockID', this.blockID);
    });
  }

  removeFromGrid = () => {
    this.positions.map((coord) => {
      let cellID = 'cell-x' + coord[0] + '-y' + coord[1];
      document.getElementById(cellID).classList.remove('cell-item-filled')
    });
  }

  updateHTML = () => {
    Array.from(document.querySelectorAll('[data-blockID]')).map((item) => {
      if(item.getAttribute('data-blockID') === this.blockID){
        item.removeAttribute('data-blockID');
        item.classList.remove('cell-item-filled');
      }
    });
    
    this.addToGrid();
  }

  destroy = () => {
    this.isMoveable = false;
  }
}
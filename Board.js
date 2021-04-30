class Board {

  constructor(cols, rows){
    this.grid = this.initGrid(cols, rows)
    this.currentBlock = null;
    this.blocks = new Set();
  }

  initGrid = (cols, rows) => {
    let output = [];
    for(let j = 0; j< rows; j++){
      for(let i = 0; i< cols; i++){
        let newSquare = new Cell(i, j);
        output.push(newSquare);
      }
    }
    return output;
  }

  loadGrid = () => {
    let ref = document.getElementById('grid');
    this.grid.map((cell) => {
      let cellAsHTML = cell.asHTML();
      ref.appendChild(cellAsHTML);
    });
  }

  startGame = () => {
    this.loadGrid();
    this.generateNewBlock();
  }

  addEventListeners = (block) => {
    document.addEventListener('keydown', (e) => {
      if( e.keyCode === ARROW_KEY.DOWN ){
        block.moveDown();
        block.updateHTML();
      }
    })
  }

  generateNewBlock = () => {
    let newBlock = new Block(4, 1);
    this.blocks.add(newBlock)
    this.currentBlock = newBlock;
    newBlock.addToGrid();
  }

  getCurrentBlock = () => {
    return this.currentBlock;
  }
}
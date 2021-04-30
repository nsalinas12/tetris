let gameboard;

window.addEventListener("DOMContentLoaded", () => {
  
  gameboard = new Board(10, 20);
  playGame();
  
});


playGame = () => {

  gameboard.startGame();
  setInterval(runGameplay, 1200);

}

runGameplay = () => {
  let currentBlock = gameboard.getCurrentBlock();
  if( currentBlock.checkIsMoveable() ){
    currentBlock.moveDown();
    currentBlock.updateHTML();
  } else {
    currentBlock.destroy();
    gameboard.generateNewBlock();
  }
}
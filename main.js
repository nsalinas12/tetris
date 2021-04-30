window.addEventListener("DOMContentLoaded", () => {
  initGrid();
});


initGrid = () => {
  let ref = document.getElementById('grid');

  let allSquares = [];

  let numCols = 10;
  let numRows = 20;

  for(j = 0; j< numRows; j++){
    for(i = 0; i< numCols; i++){
      let newSquare = new Cell(i, j);
      allSquares.push(newSquare);
    }
  }

  allSquares.map((cell) => {
    let squareAsHTML = cell.asHTML();
    ref.appendChild(squareAsHTML);
  });
}

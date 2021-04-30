window.addEventListener("DOMContentLoaded", () => {

  
  loadEventListeners();

});


const loadEventListeners = () => {

  let submitButton = document.getElementById('showSquare');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    let xCoord = document.getElementById('xCoord').value;
    let yCoord = document.getElementById('yCoord').value;

    if(xCoord !== '' && yCoord != '' && xCoord >= 0 && xCoord <= 9 && yCoord >= 0 && yCoord <= 19 ){
      document.getElementById('cell-x' + xCoord + '-y' + yCoord).classList.add('cell-item-filled');
    }
  });


  let clearButton = document.getElementById('clearSquares');
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    Array.from(document.querySelectorAll('.cell-item-filled')).map((item) => {
      item.classList.remove('cell-item-filled');
    });

  })

}
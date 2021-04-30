class Cell {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.filled = false;
  }

  getPosition = () => {
    return [this.x, this.y];
  }

  getX = () => {
    return this.x;
  }

  getY = () => {
    return this.y;
  }

  setX = (newX) => {
    this.x = newX;
  }

  setY = (newY) => {
    this.y = newY;
  }

  toggleCell = () => {
    this.filled = !this.filled;
  }

  asHTML = () => {
    let cell = document.createElement('div');
    cell.setAttribute('id', 'cell-x' + this.x + '-y' + this.y);
    cell.setAttribute('class', 'cell-item');
    return cell;
  }
}
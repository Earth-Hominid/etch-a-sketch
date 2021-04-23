const container = document.querySelector('.container');


function createGrid(column, row) {
  for (i=0; 1 < (column * row); i++) {
    const div = document.createElement('div')
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.appendChild(div).classList.add('box')
  }
}

createGrid(16,16)
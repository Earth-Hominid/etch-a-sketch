const container = document.querySelector('.container');
const buttonSection = document.querySelector('.buttons')
const pastelButton = document.createElement('button')
const greyButton = document.createElement('button')
const colourButton = document.createElement('button')
const sepiaButton = document.createElement('button')
const rougeButton = document.createElement('button')
const redButton = document.createElement('button') 

function createGrid(column, row) {
  for (i=0; i < (column * row); i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid #541B96'
    container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.appendChild(div).classList.add('square');
  }
}

createGrid(50,50)

function colourRed() {
  const squares = container.querySelectorAll('.square')
  redButton.textContent = "Red"
  redButton.addEventListener('click', () => {
    squares.forEach(square => square.addEventListener('mouseover', () => {
      square.style.background = 'red';
  }))
})
    
  buttonSection.appendChild(redButton).classList.add("button")
}

colourRed() 



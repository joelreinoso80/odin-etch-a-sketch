const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentMode(newMode) {
    currentMode = newMode
    activateButton(newMode)
  }

const colorBtn = document.getElementById('colorBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const grid = document.getElementById('grid');

colorBtn.onclick = () => setCurrentMode('color')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.addEventListener('mouseover', changeColor)
      grid.appendChild(gridElement)
    }
  };

  function reloadGrid() {
    currentSize = youSelect();
    
    grid.innerHTML = '';
    setupGrid(currentSize);
  }

  function youSelect() {
    let yourSelection = "";
    let numSelection = 0;

    do {
        yourSelection = window.prompt("Please select the size of board (from 16 to 100)", "");

        if (yourSelection != null) {
            if(isNaN(yourSelection) === false) {
                numSelection = parseInt(yourSelection);

                    if((numSelection >= 16) && (numSelection <= 100)){
                        return(numSelection)
                    }
            }
        }
        
        alert("Please, insert a whole number! (from 16 to 100)");

    } while (1);  
};

  function changeColor(e) {
    if (currentMode === 'color') 
    {
      e.target.style.backgroundColor = currentColor
    } 
    if (currentMode === 'eraser') 
    {
      e.target.style.backgroundColor = '#fefefe'
    }
  };

  function activateButton(newMode) {
    if (currentMode === 'color') 
    {
      colorBtn.style.backgroundColor = '#333333'
      colorBtn.style.color = '#FFFFFF'
      eraserBtn.style.backgroundColor = '#eeeee4'
      eraserBtn.style.color = '#333333'
    } 
    if (currentMode === 'eraser') 
    {
      eraserBtn.style.backgroundColor = '#333333'
      eraserBtn.style.color = '#FFFFFF'
      colorBtn.style.backgroundColor = '#eeeee4'
      colorBtn.style.color = '#333333'
    }
  }

  window.onload = () => {
    setupGrid(DEFAULT_SIZE)
    activateButton(DEFAULT_MODE)
  }

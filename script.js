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

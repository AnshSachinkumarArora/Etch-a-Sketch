let container = document.getElementById('container')
let gridSize = document.getElementById('gridSize')
let gridLabel = document.getElementById('gridLabel')

let gridX = gridSize.value;
let gridY = gridSize.value;
let containerWidth = container.clientWidth
let containerHeight = container.clientHeight

createGrid()

gridSize.addEventListener('input', (event) => {
    container.innerHTML = ''
    createGrid()
    gridX = 8 + (4*event.target.value)
    gridY = 8 + (4*event.target.value)
    gridLabel.textContent = `${gridX} x ${gridY}`
})

function createGrid() {
    for(let i = 0; i < gridX; i++) {
        for(let j = 0; j < gridY; j++) {
            container.innerHTML += `<div class = 'child'></div>`
        }
    }
    let child = document.querySelectorAll('.child')
    for(let i = 0; i < child.length; i++) {
        child[i].style.width = `${containerHeight/gridX}px`
        child[i].style.height = `${containerHeight/gridX}px`
    }
}

container.addEventListener(
    'mouseover', (event) => {
        event.target.classList.add('hovered')
    }
)

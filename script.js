let container = document.getElementById('container')

let column = 0

createGrid()

function createGrid() {
    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            container.innerHTML += `<div class = 'child'></div>`
        }
        column++
    }
}

container.addEventListener(
    'mouseover', (event) => {
        event.target.classList.add('hovered');
    }
)

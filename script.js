// Functions
function draw() {
    this.setAttribute('style', 'background-color: black;')
}

function createBox(size) {
    const body = document.querySelector('body')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);`)
    body.appendChild(container)

    const box = document.createElement('div')
    box.setAttribute('class', 'square')

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++){
            let currentBox = box.cloneNode(true)
            currentBox.addEventListener('mouseenter', draw)
            container.appendChild(currentBox)
        }
    }
}

function removeBox() {
    const body = document.querySelector('body')
    const container = document.querySelector('.container')
    body.removeChild(container)
}

function reset() {
    let size = prompt("Dimmension for Grid:")
    if ( size > 100 ) {
        size = 100
    }
    removeBox()
    createBox(size)
}

// MAIN
const restart = document.querySelector('button')
restart.addEventListener('click', reset)

createBox(25)

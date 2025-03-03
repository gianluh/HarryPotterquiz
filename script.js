
let startButton = document.querySelectorAll('.start')

const mousedownEffect = (target) => {
    target.style.opacity = '0.7'
}

const mouseupEffect = (target) => {
    target.style.opacity = '1'
}

startButton.forEach(button => {
    button.addEventListener('mousedown', () => mousedownEffect(button))
    button.addEventListener('mouseup', () => mouseupEffect(button))
})

let main = document.getElementById('main-content')
let header = document.getElementById('header')
let opening = document.getElementById('opening')

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

main.style.visibility = 'hidden'
main.style.opacity = '0'
header.style.visibility = 'hidden'
header.style.opacity = '0'

opening.addEventListener('click', () => {
    opening.hidden = true
    main.style.visibility = 'visible'
    main.style.opacity = '1'
    main.style.transition = 'opacity 0.3s ease'
    header.style.visibility = 'visible'
    header.style.opacity = '1'
    header.style.transition = 'opacity 0.3s ease'
    
});
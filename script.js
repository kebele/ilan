import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'


let lastRenderTime = 0
// const SNAKE_SPEED = 2
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    //render hızı
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime
    // console.log(currentTime)
    // console.log(secondSinceLastRender)
    // console.log('render')

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
}
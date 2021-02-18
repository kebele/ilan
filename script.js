import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'


let lastRenderTime = 0
// const SNAKE_SPEED = 2
let gameOver = false

const gameBoard = document.getElementById('game-board')

function main(currentTime) {

    if(gameOver){
        // return alert('you lose')
        if(confirm('you lost! press ok to restart')){
            window.location = '/'
        }
        return
    }

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
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
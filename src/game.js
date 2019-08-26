import Paddle from './paddle.js';
import Ball from './ball.js';
import InputHandler from './input.js';
import Brick from './brick.js';

export default class Game {
    constructor(gameWidth, gameHeigth){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeigth;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        let bricks = [];

        for(let i = 0; i <10; i++){
            bricks.push(new Brick(this, {x: i * 52, y: 30}));
        }

        this.gameObjects = [this.ball, this.paddle, ...bricks]

        

        new InputHandler(this.paddle);
    }
    update(dt) {
        

        this.gameObjects.forEach(object => object.update(dt));

    }

    draw(ctx) {
        

        this.gameObjects.forEach(object => object.draw(ctx));
    }
}
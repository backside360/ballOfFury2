import Paddle from './paddle.js';
import Ball from './ball.js';

let canvas = document.getElementById('game');

let ctx = canvas.getContext('2d');

canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);

let paddle = new Paddle(window.innerWidth, window.innerHeight);
let ball = new Ball(window.innerWidth, window.innerHeight);

let lastTime = 0;

const gameLoop = timestamp => {
  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  paddle.draw(ctx);
  paddle.update(dt);

  ball.draw(ctx);
  ball.update(dt);

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);

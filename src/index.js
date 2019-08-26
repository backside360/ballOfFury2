import Game from './game.js';

let canvas = document.getElementById('game');

let ctx = canvas.getContext('2d');

canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);


let game = new Game(window.innerWidth, window.innerHeight);
game.start();




let lastTime = 0;

const gameLoop = timestamp => {
  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
  game.update(dt);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);

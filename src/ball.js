export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.image = document.getElementById('ball');

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = { x: 300, y: 10 };
    this.speed = { x: 0, y: 4 };
    this.size = 30;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}
export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth * 0.15;
    this.height = 20;
    this.gW = gameWidth;
    this.ready = false;
    this.position = {
      x: 0,
      y: gameHeight - this.height - 10
    };

    this.speed = { x: 2, y: 0 };
  }
  draw(ctx) {
    let grd = ctx.createLinearGradient(
      this.position.x - 5,
      this.position.y - 5,
      this.width,
      this.height
    );
    grd.addColorStop(0, '#00ABEB');
    grd.addColorStop(1, '#26C000');
    ctx.fillStyle = grd;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.position.x += this.speed.x;

    if (this.position.x + this.width > this.gW) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.x + this.width <= 0) {
      this.speed.x = this.speed.x * -1;
    }
  }
  init() {
    this.ready = true;
    let img = new Image();
  }
}

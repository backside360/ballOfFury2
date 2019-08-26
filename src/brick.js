export default class Brick {
    constructor(game,position) {
        this.image = document.getElementById('brick');

        this.game = game;

        this.position = position;
        this.width = 52;
        this.heigth = 24;

    }


    update(){}

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.heigth 
        )
    }
}
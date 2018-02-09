export default class Ball {

    lineColor = "#ff9eb7";
    fillColor = "#000000";
    lineWidth = 1;

    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.vel = {
            x: (Math.random() * 2 - 1) / 2,
            y: (Math.random() * 2 - 1) / 2
        };
        this.radius = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc((0.5 + this.x), (0.5 + this.y), this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.fillColor;
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.shadowColor = this.lineColor;
        this.ctx.shadowBlur = 2;
        this.ctx.stroke();
    }

    update() {
        if ((this.x - this.radius - this.lineWidth) <= 0 || (this.x + this.radius + this.lineWidth) >= this.canvas.width) {
            this.vel.x = -this.vel.x;
        }
        if ((this.y - this.radius - this.lineWidth) <= 0 || (this.y + this.radius + this.lineWidth) >= this.canvas.height) {
            this.vel.y = -this.vel.y;
        }
        this.x += this.vel.x;
        this.y += this.vel.y;
    };

    turnAround() {
        this.vel.x = -this.vel.x;
        this.vel.y = -this.vel.y;
    };
}
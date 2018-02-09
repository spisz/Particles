import Ball from './Ball';

export default class Animator {

    balls = [];
    ballCount = 28;
    lineWidth = 1;
    maxDistance = 200;

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.lastTime = Date.now();
        this.addBalls();
    }

    addBalls() {
        for (let i = 0; i < this.ballCount; i++) {
            this.balls.push(new Ball(this.canvas, this.ctx));
        }
    }

    draw() {
        for (let i = 0; i < this.ballCount; i++) {
            let ball = this.balls[i];
            for (let j = this.ballCount - 1; j > i; j--) {
                let ball2 = this.balls[j];
                let ballDistance = Math.hypot(ball2.x - ball.x, ball2.y - ball.y);
                let rangeDistance = ballDistance / this.maxDistance;
                let alpha = (1 - rangeDistance).toString();

                if(ballDistance < (ball.radius + ball2.radius + 1)){
                    ball.turnAround();
                    ball2.turnAround();
                }
                if (rangeDistance < 1) {
                    this.ctx.strokeStyle = `rgba(232,131,158,${alpha})`;
                    this.ctx.lineWidth = this.lineWidth;
                    this.ctx.beginPath();
                    this.ctx.moveTo(ball.x, ball.y);
                    this.ctx.lineTo(ball2.x, ball2.y);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }
            ball.draw();
        }
    }

    update() {
        let diff = Date.now() - this.lastTime;
        for (let frame = 0; frame * 16.6667 < diff; frame++) {
            this.balls.map((ball) => {
               ball.update();
            });
        }
        this.lastTime = Date.now();
    }
}
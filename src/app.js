import './styles/styles.scss';

import Animator from './js/Animator';

const init = () => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const animator = new Animator(canvas, ctx);

    const loop = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animator.update();
        animator.draw();
        requestAnimationFrame(loop);
    };

    loop();
};

init();
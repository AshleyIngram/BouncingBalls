import Scene from './Scene';
import Ball from './Ball';

/**
 * The entry point to the Bouncing Ball
 * Application
 */
class BouncingBallApplication {
  /**
   * Create a new Bouncing Ball Application, and
   * perform all the necessary initial setup.
   */
  constructor() {
    const canvas = document.getElementById('canvas');
    const scene = new Scene(canvas);
    const fps = 1000 / 120;
    this.balls = [];

    canvas.addEventListener('click', (evt) => {
      const angle = Math.random() * 360;
      const velocity = Math.random() * 30;
      const ball = new Ball(scene, evt.clientX, evt.clientY, angle, velocity);
      this.balls.push(ball);
    });

    setInterval(() => {
      scene.sceneSetup();

      this.balls.forEach((ball) => {
        ball.render();
      });
    }, fps);
  }
}

(function() {
  new BouncingBallApplication();
})();

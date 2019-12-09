import Scene from './Scene';
import Ball from './Ball';
import BowlingBall from './BowlingBall';
import BasketBall from './BasketBall';
import Flubber from './Flubber';
import TennisBall from './TennisBall';

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
    const collisionCheckbox = document.getElementById('collision');
    const ballTypeDropdown = document.getElementById('ballType');
    const scene = new Scene(canvas);
    const fps = 1000 / 120;

    this.ballType = 'default';
    this.balls = [];
    this.ballCollisionEnabled = false;

    canvas.addEventListener('click', (evt) => {
      this.createBall(scene, evt);
    });

    collisionCheckbox.addEventListener('change', (evt) => {
      this.ballCollisionEnabled = event.target.checked;
    });

    ballTypeDropdown.addEventListener('change', (evt) => {
      this.ballType = evt.target.value;
    });

    setInterval(() => {
      this.renderNewFrame(scene);
    }, fps);
  }

  /**
   * The method called in the rendering loop.
   * Perform any logic/rendering required every frame
   * @param {Scene} scene The scene to render
   */
  renderNewFrame(scene) {
    scene.sceneSetup();

    this.balls.forEach((ball) => {
      ball.render();
    });

    if (this.ballCollisionEnabled) {
      // Basic O(N^2) loop to check whether any 2 arbitrary balls
      // are colliding. In a more complex application, this might
      // use a more suitable data-structure to determine
      // whether to objects are likely to collide. For example,
      // a quad-tree
      for (let i = 0; i < this.balls.length; i++) {
        for (let j = i + 1; j < this.balls.length; j++) {
          const ball1 = this.balls[i];
          const ball2 = this.balls[j];

          ball1.handleCollision(ball2);
        }
      }
    }
  }

  /**
   * Create a new Ball in the Scene
   * @param {Scene} scene The scene object representing the clicked canvas
   * (and therefore the scene the ball belongs to)
   * @param {Event} evt The click event
   */
  createBall(scene, evt) {
    const angle = Math.random() * 360;
    const velocity = Math.random() * 30;
    let ball = {};

    switch (this.ballType) {
      case 'tennis':
        ball =
          new TennisBall(scene, evt.clientX, evt.clientY, angle, velocity);
        break;
      case 'basketball':
        ball = new BasketBall(scene, evt.clientX, evt.clientY, angle, velocity);
        break;
      case 'bowling':
        ball =
            new BowlingBall(scene, evt.clientX, evt.clientY, angle, velocity);
        break;
      case 'flubber':
        ball = new Flubber(scene, evt.clientX, evt.clientY, angle, velocity);
        break;
      default:
        ball = new Ball(scene, evt.clientX, evt.clientY, angle, velocity);
        break;
    }

    this.balls.push(ball);
  }
}

(function() {
  new BouncingBallApplication();
})();

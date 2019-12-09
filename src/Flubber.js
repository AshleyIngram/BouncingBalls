import Ball from './Ball';

/**
 * Flubber. Very springy.
 */
export default class BasketBall extends Ball {
  /**
   * Create an instance of a Flubber object
   *
   * @param {Scene} scene The scene object, containing global helpers
   * to help with rendering (e.g. adjusting the X/Y offsets)
   * @param {number} initialX The X position the ball should be initially
   * created at
   * @param {number} initialY The Y position the ball should be initially
   * created at
   * @param {number} initialAngle The initial angle of travel for the ball
   * @param {number} initialVelocity How fast the ball is initially moving
   */
  constructor(scene, initialX, initialY, initialAngle, initialVelocity) {
    super(scene, initialX, initialY, initialAngle, initialVelocity);

    this.dampeningFactor = 0.999;
    this.color = '00FF46';
  }
}

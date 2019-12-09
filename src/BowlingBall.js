import Ball from './Ball';

/**
 * A Bowling Ball. Bigger and Heavier, should bounce less.
 */
export default class BowlingBall extends Ball {
  /**
   * Create an instance of a BowlingBall object
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

    this.mass = 0.2;
    this.radius = 21;
  }
}

import Ball from './Ball';

/**
 * A Tennis Ball. The same as the default ball, except in colour
 */
export default class TennisBall extends Ball {
  /**
   * Create an instance of a TennisBall object
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

    this.color = 'c9f364';
  }
}

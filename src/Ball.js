/**
 * A ball, which will be rendered on the screen
 */
export default class Ball {
  /**
   * Create an instance of a Ball object
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
    this.scene = scene;
    this.x = initialX;
    this.y = initialY;
    this.angle = initialAngle;
    this.velocity = initialVelocity;
    this.size = 10;

    this.xDiff = this.velocity * Math.cos(this.degreesToRadians(this.angle));
    this.yDiff = this.velocity * Math.sin(this.degreesToRadians(this.angle));
    this.gravity = 0.3;
  }

  /**
   * Convert from Degrees to Radians
   * @param {number} degrees The number of degrees (between 0 and 360)
   * @return {number} The degrees in radians
   */
  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  /**
   * Calculate the new position of the ball, and render it
   */
  render() {
    this.yDiff += this.gravity;
    this.x += this.xDiff;
    this.y += this.yDiff;

    this.scene.drawCircle(this.x, this.y, this.size);
  }
}

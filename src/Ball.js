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
    this.radius = 10;

    this.xDiff = this.velocity * Math.cos(Ball.degreesToRadians(this.angle));
    this.yDiff = this.velocity * Math.sin(Ball.degreesToRadians(this.angle));
    this.gravity = 0.3;
  }

  /**
   * Convert from Degrees to Radians
   * @param {number} degrees The number of degrees (between 0 and 360)
   * @return {number} The degrees in radians
   */
  static degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  /**
   * Move the ball from its current position, to the next
   */
  moveBall() {
    this.yDiff += this.gravity;
    this.x += this.xDiff;
    this.y += this.yDiff;
  }

  /**
   * Handle a collision with the horizontal walls,
   * by reversing the trajectory of the ball
   */
  handleHorizontalBoundaryCollision() {
    const boundaries = this.scene.getDimensions();

    if (this.x <= boundaries.left && this.xDiff < 0) {
      // Add the radius, to ensure the ball isn't only half in scene
      this.x = boundaries.left + this.radius;
      this.xDiff = -this.xDiff;
    }

    if (this.x >= boundaries.right && this.xDiff > 0) {
      // Subtract the radius, to ensure the ball isn't only half in scene
      this.x = boundaries.right - this.radius;
      this.xDiff = -this.xDiff;
    }
  }

  /**
   * Handle a collision with the vertical walls,
   * by reversing the trajectory of the ball
   */
  handleVerticalBoundaryCollision() {
    const boundaries = this.scene.getDimensions();

    if (this.y <= boundaries.top && this.yDiff < 0) {
      // Add the radius, to ensure the ball isn't only half in scene
      this.y = boundaries.top + this.radius;
      this.yDiff = -this.yDiff;
    }

    if (this.y >= boundaries.bottom && this.yDiff > 0) {
      // Subtract the radius, to ensure the ball isn't only half in scene
      this.y = boundaries.bottom - this.radius;
      this.yDiff = -this.yDiff;
    }
  }

  /**
   * Calculate the new position of the ball, and render it
   */
  render() {
    this.moveBall();
    this.handleHorizontalBoundaryCollision();
    this.handleVerticalBoundaryCollision();

    this.scene.drawCircle(this.x, this.y, this.radius);
  }
}

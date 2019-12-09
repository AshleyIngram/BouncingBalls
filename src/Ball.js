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
    this.dampeningFactor = 0.8;
    this.color = '000000';
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
   * Handle a collision with the walls on the horizontal axis,
   * by reversing the trajectory of the ball
   */
  handleHorizontalBoundaryCollision() {
    const boundaries = this.scene.getDimensions();

    if (this.x <= boundaries.left + this.radius && this.xDiff < 0) {
      // Add the radius, to ensure the ball isn't only half in scene
      this.x = boundaries.left + this.radius;
      this.xDiff = -this.xDiff * this.dampeningFactor;
      this.yDiff *= this.dampeningFactor;
    }

    if (this.x >= boundaries.right - this.radius && this.xDiff > 0) {
      // Subtract the radius, to ensure the ball isn't only half in scene
      this.x = boundaries.right - this.radius;
      this.xDiff = -this.xDiff * this.dampeningFactor;
      this.yDiff *= this.dampeningFactor;
    }
  }

  /**
   * Handle a collision with the walls on the vertical axis,
   * by reversing the trajectory of the ball
   */
  handleVerticalBoundaryCollision() {
    const boundaries = this.scene.getDimensions();

    if (this.y <= boundaries.top + this.radius && this.yDiff < 0) {
      // Add the radius, to ensure the ball isn't only half in scene
      this.y = boundaries.top + this.radius;
      this.yDiff = -this.yDiff * this.dampeningFactor;
      this.xDiff *= this.dampeningFactor;
    }

    if (this.y >= boundaries.bottom - this.radius && this.yDiff > 0) {
      // Subtract the radius, to ensure the ball isn't only half in scene
      this.y = boundaries.bottom - this.radius;
      this.yDiff = -this.yDiff * this.dampeningFactor;
      this.xDiff *= this.dampeningFactor;
    }
  }

  /**
   * Calculate an updated velocity based on initial velocity and
   * mass of 2 balls using elastic collision (aka no loss of velocity).
   * @param {number} b1Velocity The velocity of ball 1
   * @param {number} b2Velocity The velocity of ball 2
   * @param {number} b1Mass The mass of ball 1
   * @param {number} b2Mass The mass of ball 2
   * @return {number} New velocity for ball 1
   */
  static elasticCollision(b1Velocity, b2Velocity, b1Mass, b2Mass) {
    // more readable on one line
    // eslint-disable-next-line max-len
    return (b1Velocity * (b1Mass - b2Mass) + (2 * b2Mass * b2Velocity)) / (b1Mass + b2Mass);
  }

  /**
   * Check if the ball is colliding with another ball.
   * If it is, handle it by deflecting away.
   * @param {Ball} otherBall Another ball which may be
   * colliding with the current one.
   */
  handleCollision(otherBall) {
    const xDistance = Math.pow(otherBall.x - this.x, 2);
    const yDistance = Math.pow(otherBall.y - this.y, 2);
    const centerDistance = xDistance + yDistance;
    const sumOfRadii = Math.pow(otherBall.radius + this.radius, 2);

    if (centerDistance <= sumOfRadii) {
      // Reset this ball to the position before the collision
      // otherwise balls will get stuck together!
      this.x -= this.xDiff;
      this.y -= this.yDiff;

      this.xDiff = Ball.elasticCollision(
          this.xDiff, otherBall.xDiff, this.radius, otherBall.dampeningFactor);
      this.yDiff = Ball.elasticCollision(
          this.yDiff, otherBall.yDiff, this.radius, otherBall.dampeningFactor);
    }
  }

  /**
   * Calculate the new position of the ball, and render it
   */
  render() {
    this.moveBall();
    this.handleHorizontalBoundaryCollision();
    this.handleVerticalBoundaryCollision();

    this.scene.drawCircle(this.x, this.y, this.radius, this.color);
  }
}

/* eslint-disable max-len */ // Keep test descriptions intact
import {expect} from 'chai';
import Ball from '../src/Ball';

const helpers = {
  getMockScene: (top, bottom, left, right) => {
    return {
      getDimensions: () => {
        return {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
        };
      },
    };
  },
};

describe('Degrees to Radians', () => {
  it('should convert 0 Degrees to 0 Radians', () => {
    expect(Ball.degreesToRadians(0)).to.equal(0);
  });

  it('should convert 90 Degrees to PI / 2 Radians', () => {
    expect(Ball.degreesToRadians(90)).to.equal(Math.PI / 2);
  });

  it('should convert 180 Degrees to PI Radians', () => {
    expect(Ball.degreesToRadians(180)).to.equal(Math.PI);
  });

  it('should convert 360 Degrees to 2PI Radians', () => {
    expect(Ball.degreesToRadians(360)).to.equal(Math.PI * 2);
  });
});

describe('Ball movement', () => {
  it('should change the x value by the x velocity', () => {
    const ball = new Ball({}, 10, 10, 0, 5);

    ball.moveBall();

    expect(ball.x).to.equal(15);
  });

  it('should change the y value by the y velocity + gravity', () => {
    const ball = new Ball({}, 10, 10, 90, 5);

    ball.moveBall();

    expect(ball.y).to.equal(15.3);
  });

  it('should change the y velocity to reflect gravity', () => {
    const ball = new Ball({}, 10, 10, 90, 5);

    ball.moveBall();

    expect(ball.yDiff).to.be.equal(5.3);
  });
});

describe('Horizonal Collision', () => {
  it('should reverse the trajectory of the ball when it hits the right wall', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 100, 50, 0, 10);

    ball.handleHorizontalBoundaryCollision();

    expect(ball.xDiff).to.equal(-10);
  });

  it('should not reverse trajectory when the ball hits the left wall, and has reversed', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 100, 50, 0, -10);

    ball.handleHorizontalBoundaryCollision();

    expect(ball.xDiff).to.equal(-10);
  });

  it('should reset the position of the ball to canvas width if it goes off the right side', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 1000, 50, 0, 10);

    ball.handleHorizontalBoundaryCollision();

    expect(ball.x).to.equal(90);
  });

  it('should reverse the trajectory of the ball when it hits the left wall', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 0, 50, 0, -10);

    ball.handleHorizontalBoundaryCollision();

    expect(ball.xDiff).to.equal(10);
  });

  it('should not reverse trajectory when the ball hits the left wall, and has reversed', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 0, 50, 0, 10);

    ball.handleHorizontalBoundaryCollision();

    expect(ball.xDiff).to.equal(10);
  });

  it('should reset the position of the ball to 0 if it goes off the left side', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, -1000, 50, 0, -10);

    ball.handleHorizontalBoundaryCollision();

    expect(ball.x).to.equal(10);
  });
});

describe('Vertical Collision', () => {
  it('should reverse the trajectory of the ball when it hits the top', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 50, 0, 90, -10);

    ball.handleVerticalBoundaryCollision();

    expect(ball.yDiff).to.equal(10);
  });

  it('should not reverse trajectory when the ball hits the top, and has reversed', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 50, 0, 90, 10);

    ball.handleVerticalBoundaryCollision();

    expect(ball.yDiff).to.equal(10);
  });

  it('should reset the position of the ball to canvas top if it goes above the top', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 50, -1000, 90, -10);

    ball.handleVerticalBoundaryCollision();

    expect(ball.y).to.equal(10);
  });

  it('should reverse the trajectory of the ball when it hits the bottom', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 50, 100, 90, 10);

    ball.handleVerticalBoundaryCollision();

    expect(ball.yDiff).to.equal(-10);
  });

  it('should not reverse trajectory when the ball hits the bottom, and has reversed', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 50, 100, 90, -10);

    ball.handleVerticalBoundaryCollision();

    expect(ball.yDiff).to.equal(-10);
  });

  it('should reset the position of the ball to canvas bottom if it falls below the bottom', () => {
    const scene = helpers.getMockScene(0, 100, 0, 100);
    const ball = new Ball(scene, 50, 1000, 90, 10);

    ball.handleVerticalBoundaryCollision();

    expect(ball.y).to.equal(90);
  });
});

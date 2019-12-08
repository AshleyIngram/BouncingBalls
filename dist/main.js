/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ball; });\n/**\r\n * A ball, which will be rendered on the screen\r\n */\r\nclass Ball {\r\n  /**\r\n   * Create an instance of a Ball object\r\n   *\r\n   * @param {Scene} scene The scene object, containing global helpers\r\n   * to help with rendering (e.g. adjusting the X/Y offsets)\r\n   * @param {number} initialX The X position the ball should be initially\r\n   * created at\r\n   * @param {number} initialY The Y position the ball should be initially\r\n   * created at\r\n   * @param {number} initialAngle The initial angle of travel for the ball\r\n   * @param {number} initialVelocity How fast the ball is initially moving\r\n   */\r\n  constructor(scene, initialX, initialY, initialAngle, initialVelocity) {\r\n    this.scene = scene;\r\n    this.x = initialX;\r\n    this.y = initialY;\r\n    this.angle = initialAngle;\r\n    this.velocity = initialVelocity;\r\n    this.radius = 10;\r\n\r\n    this.xDiff = this.velocity * Math.cos(Ball.degreesToRadians(this.angle));\r\n    this.yDiff = this.velocity * Math.sin(Ball.degreesToRadians(this.angle));\r\n    this.gravity = 0.3;\r\n    this.mass = 0.8;\r\n  }\r\n\r\n  /**\r\n   * Convert from Degrees to Radians\r\n   * @param {number} degrees The number of degrees (between 0 and 360)\r\n   * @return {number} The degrees in radians\r\n   */\r\n  static degreesToRadians(degrees) {\r\n    return degrees * Math.PI / 180;\r\n  }\r\n\r\n  /**\r\n   * Move the ball from its current position, to the next\r\n   */\r\n  moveBall() {\r\n    this.yDiff += this.gravity;\r\n    this.x += this.xDiff;\r\n    this.y += this.yDiff;\r\n  }\r\n\r\n  /**\r\n   * Handle a collision with the walls on the horizontal axis,\r\n   * by reversing the trajectory of the ball\r\n   */\r\n  handleHorizontalBoundaryCollision() {\r\n    const boundaries = this.scene.getDimensions();\r\n\r\n    if (this.x <= boundaries.left + this.radius && this.xDiff < 0) {\r\n      // Add the radius, to ensure the ball isn't only half in scene\r\n      this.x = boundaries.left + this.radius;\r\n      this.xDiff = -this.xDiff * this.mass;\r\n      this.yDiff *= this.mass;\r\n    }\r\n\r\n    if (this.x >= boundaries.right - this.radius && this.xDiff > 0) {\r\n      // Subtract the radius, to ensure the ball isn't only half in scene\r\n      this.x = boundaries.right - this.radius;\r\n      this.xDiff = -this.xDiff * this.mass;\r\n      this.yDiff *= this.mass;\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Handle a collision with the walls on the vertical axis,\r\n   * by reversing the trajectory of the ball\r\n   */\r\n  handleVerticalBoundaryCollision() {\r\n    const boundaries = this.scene.getDimensions();\r\n\r\n    if (this.y <= boundaries.top + this.radius && this.yDiff < 0) {\r\n      // Add the radius, to ensure the ball isn't only half in scene\r\n      this.y = boundaries.top + this.radius;\r\n      this.yDiff = -this.yDiff * this.mass;\r\n      this.xDiff *= this.mass;\r\n    }\r\n\r\n    if (this.y >= boundaries.bottom - this.radius && this.yDiff > 0) {\r\n      // Subtract the radius, to ensure the ball isn't only half in scene\r\n      this.y = boundaries.bottom - this.radius;\r\n      this.yDiff = -this.yDiff * this.mass;\r\n      this.xDiff *= this.mass;\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Calculate an updated velocity based on initial velocity and\r\n   * mass of 2 balls using elastic collision (aka no loss of velocity).\r\n   * @param {number} b1Velocity The velocity of ball 1\r\n   * @param {number} b2Velocity The velocity of ball 2\r\n   * @param {number} b1Mass The mass of ball 1\r\n   * @param {number} b2Mass The mass of ball 2\r\n   * @return {number} New velocity for ball 1\r\n   */\r\n  static elasticCollision(b1Velocity, b2Velocity, b1Mass, b2Mass) {\r\n    // more readable on one line\r\n    // eslint-disable-next-line max-len\r\n    return (b1Velocity * (b1Mass - b2Mass) + (2 * b2Mass * b2Velocity)) / (b1Mass + b2Mass);\r\n  }\r\n\r\n  /**\r\n   * Check if the ball is colliding with another ball.\r\n   * If it is, handle it by deflecting away.\r\n   * @param {Ball} otherBall Another ball which may be\r\n   * colliding with the current one.\r\n   */\r\n  handleCollision(otherBall) {\r\n    const xDistance = Math.pow(otherBall.x - this.x, 2);\r\n    const yDistance = Math.pow(otherBall.y - this.y, 2);\r\n    const centerDistance = xDistance + yDistance;\r\n    const sumOfRadii = Math.pow(otherBall.radius + this.radius, 2);\r\n\r\n    if (centerDistance <= sumOfRadii) {\r\n      // Reset this ball to the position before the collision\r\n      // otherwise balls will get stuck together!\r\n      this.x -= this.xDiff;\r\n      this.y -= this.yDiff;\r\n\r\n      this.xDiff = Ball.elasticCollision(\r\n          this.xDiff, otherBall.xDiff, this.mass, otherBall.mass);\r\n      this.yDiff = Ball.elasticCollision(\r\n          this.yDiff, otherBall.yDiff, this.mass, otherBall.mass);\r\n\r\n      // Redirect the other ball too. We won't perform collision detection\r\n      // for the same 2 balls twice, so we need to make sure it moves too\r\n      otherBall.xDiff = Ball.elasticCollision(\r\n          otherBall.xDiff, this.xDiff, otherBall.mass, this.mass);\r\n      otherBall.yDiff = Ball.elasticCollision(\r\n          otherBall.yDiff, this.yDiff, otherBall.mass, this.mass);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Calculate the new position of the ball, and render it\r\n   */\r\n  render() {\r\n    this.moveBall();\r\n    this.handleHorizontalBoundaryCollision();\r\n    this.handleVerticalBoundaryCollision();\r\n\r\n    this.scene.drawCircle(this.x, this.y, this.radius);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Ball.js?");

/***/ }),

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/**\r\n * A Scene, representing one render context for the application.\r\n * Contains helpers to (for example) draw objects.\r\n */\r\nclass Scene {\r\n  /**\r\n   * Create a new Scene\r\n   *\r\n   * @param {Element} canvas The Canvas to be used for rendering\r\n   */\r\n  constructor(canvas) {\r\n    this.canvas = canvas;\r\n  }\r\n\r\n  /**\r\n   * Gets the value of a property, stripping off\r\n   * the 'px' suffix.\r\n   * @param {Element} element The element to get the property from\r\n   * @param {string} property The property name\r\n   * @return {string} The value of the property, without 'px' at the end\r\n   */\r\n  getPropertyWithoutPx(element, property) {\r\n    return window\r\n        .getComputedStyle(element)\r\n        .getPropertyValue(property)\r\n        .slice(0, -2);\r\n  }\r\n\r\n  /**\r\n   * Fix the DPI of the canvas so rendered elements\r\n   * aren't blurry\r\n   */\r\n  fixDpi() {\r\n    const dpi = window.devicePixelRatio;\r\n    const canvasHeight = this.getPropertyWithoutPx(this.canvas, 'height');\r\n    const canvasWidth = this.getPropertyWithoutPx(this.canvas, 'width');\r\n    canvas.setAttribute('height', canvasHeight * dpi);\r\n    canvas.setAttribute('width', canvasWidth * dpi);\r\n  }\r\n\r\n  /**\r\n   * Get an adjusted X position for rendering\r\n   * (taking into account modified canvas size, DPI, etc.)\r\n   * @param {number} x The original, unadjusted, x value\r\n   * @return {number} An x value adjusted for canvas size, etc.\r\n   */\r\n  getAdjustedXPosition(x) {\r\n    const rect = this.canvas.getBoundingClientRect();\r\n    const elementRelativeX = x - rect.left;\r\n    const adjustedX = elementRelativeX * canvas.width / rect.width;\r\n\r\n    return adjustedX;\r\n  }\r\n\r\n  /**\r\n   * Get an adjusted Y position for rendering\r\n   * (taking into account modified canvas size, DPI, etc.)\r\n   * @param {number} y The original, unadjusted, y value\r\n   * @return {number} An y value adjusted for canvas size, etc.\r\n   */\r\n  getAdjustedYPosition(y) {\r\n    const rect = this.canvas.getBoundingClientRect();\r\n    const elementRelativeY = y - rect.top;\r\n    const adjustedY = elementRelativeY * canvas.height / rect.height;\r\n\r\n    return adjustedY;\r\n  }\r\n\r\n  /**\r\n   * Get the dimensions of the scene\r\n   * @return {object} An object representing the top/left/right/bottom\r\n   * of the scene\r\n   */\r\n  getDimensions() {\r\n    const rect = this.canvas.getBoundingClientRect();\r\n\r\n    return {\r\n      top: rect.top,\r\n      left: rect.left,\r\n      right: rect.right,\r\n      bottom: rect.bottom,\r\n    };\r\n  }\r\n\r\n  /**\r\n   * Clear the canvas. Used to ensure there aren't\r\n   * visual artefacts between frames\r\n   */\r\n  clearCanvas() {\r\n    const renderContext = this.canvas.getContext('2d');\r\n    renderContext.clearRect(0, 0, canvas.width, canvas.height);\r\n  }\r\n\r\n  /**\r\n   * Perform per-frame setup of the scene\r\n   */\r\n  sceneSetup() {\r\n    // Fix the DPI on every frame, in case its changed\r\n    this.fixDpi();\r\n    this.clearCanvas();\r\n  }\r\n\r\n  /**\r\n   * Draw a circle\r\n   * @param {number} x The X position to draw the circle\r\n   * @param {number} y The Y position to draw the circle\r\n   * @param {number} radius The radius of the circle\r\n   */\r\n  drawCircle(x, y, radius) {\r\n    const renderContext = this.canvas.getContext('2d');\r\n    renderContext.beginPath();\r\n    const adjustedX = this.getAdjustedXPosition(x);\r\n    const adjustedY = this.getAdjustedYPosition(y);\r\n    renderContext.arc(adjustedX, adjustedY, radius, 0, 2 * Math.PI);\r\n    renderContext.fill();\r\n    renderContext.closePath();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Scene.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ \"./src/Scene.js\");\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.js\");\n\r\n\r\n\r\n/**\r\n * The entry point to the Bouncing Ball\r\n * Application\r\n */\r\nclass BouncingBallApplication {\r\n  /**\r\n   * Create a new Bouncing Ball Application, and\r\n   * perform all the necessary initial setup.\r\n   */\r\n  constructor() {\r\n    const canvas = document.getElementById('canvas');\r\n    const collisionCheckbox = document.getElementById('collision');\r\n    const scene = new _Scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\r\n    const fps = 1000 / 120;\r\n\r\n    this.balls = [];\r\n    this.ballCollisionEnabled = false;\r\n\r\n    canvas.addEventListener('click', (evt) => {\r\n      this.createBall(scene, evt);\r\n    });\r\n\r\n    collisionCheckbox.addEventListener('change', (event) => {\r\n      this.ballCollisionEnabled = event.target.checked;\r\n    });\r\n\r\n    setInterval(() => {\r\n      this.renderNewFrame(scene);\r\n    }, fps);\r\n  }\r\n\r\n  /**\r\n   * The method called in the rendering loop.\r\n   * Perform any logic/rendering required every frame\r\n   * @param {Scene} scene The scene to render\r\n   */\r\n  renderNewFrame(scene) {\r\n    scene.sceneSetup();\r\n\r\n    this.balls.forEach((ball) => {\r\n      ball.render();\r\n    });\r\n\r\n    if (this.ballCollisionEnabled) {\r\n      for (let i = 0; i < this.balls.length; i++) {\r\n        for (let j = i + 1; j < this.balls.length; j++) {\r\n          const ball1 = this.balls[i];\r\n          const ball2 = this.balls[j];\r\n\r\n          ball1.handleCollision(ball2);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Create a new Ball in the Scene\r\n   * @param {Scene} scene The scene object representing the clicked canvas\r\n   * (and therefore the scene the ball belongs to)\r\n   * @param {Event} evt The click event\r\n   */\r\n  createBall(scene, evt) {\r\n    const angle = Math.random() * 360;\r\n    const velocity = Math.random() * 30;\r\n    const ball = new _Ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](scene, evt.clientX, evt.clientY, angle, velocity);\r\n    this.balls.push(ball);\r\n  }\r\n}\r\n\r\n(function() {\r\n  new BouncingBallApplication();\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
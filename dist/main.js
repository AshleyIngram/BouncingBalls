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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The entry point to the Bouncing Ball\n * Application\n */\nclass BouncingBallApplication {\n  /**\n   * Gets the value of a property, stripping off\n   * the 'px' suffix.\n   * @param {Element} element The element to get the property from\n   * @param {string} property The property name\n   * @return {string} The value of the property, without 'px' at the end\n   */\n  getPropertyWithoutPx(element, property) {\n    return window\n        .getComputedStyle(element)\n        .getPropertyValue(property)\n        .slice(0, -2);\n  }\n\n  /**\n   * Gets a relative cursor position from a click event,\n   * adjusting for the position and DPI scaling of the canvas\n   * @param {Event} evt The event object triggered by a click\n   * @param {Element} canvas The canvas that was clicked\n   * @return {object} An object with the X and Y positions\n   * of the click\n   */\n  getCursorPosition(evt, canvas) {\n    const rect = canvas.getBoundingClientRect();\n    const elementRelativeX = evt.clientX - rect.left;\n    const elementRelativeY = evt.clientY - rect.top;\n    const x = elementRelativeX * canvas.width / rect.width;\n    const y = elementRelativeY * canvas.height / rect.height;\n\n    return {\n      x: x,\n      y: y,\n    };\n  }\n\n  /**\n   * Fix the DPI of the canvas so rendered elements\n   * aren't blurry\n   * @param {Element} canvas The canvas to adjust the DPI of\n   */\n  fixDpi(canvas) {\n    const dpi = window.devicePixelRatio;\n    const canvasHeight = this.getPropertyWithoutPx(canvas, 'height');\n    const canvasWidth = this.getPropertyWithoutPx(canvas, 'width');\n    canvas.setAttribute('height', canvasHeight * dpi);\n    canvas.setAttribute('width', canvasWidth * dpi);\n  }\n\n  /**\n   * Create a new Bouncing Ball Application, and\n   * perform all the necessary initial setup.\n   */\n  constructor() {\n    const canvas = document.getElementById('canvas');\n    this.fixDpi(canvas);\n\n    canvas.addEventListener('click', (evt) => {\n      const renderContext = canvas.getContext('2d');\n      renderContext.beginPath();\n      const circlePosition = this.getCursorPosition(evt, canvas);\n      renderContext.arc(circlePosition.x, circlePosition.y, 10, 0, 2 * Math.PI);\n      renderContext.fill();\n      renderContext.closePath();\n    });\n  }\n}\n\n(function() {\n  new BouncingBallApplication();\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
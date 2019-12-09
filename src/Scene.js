/**
 * A Scene, representing one render context for the application.
 * Contains helpers to (for example) draw objects.
 */
export default class Scene {
  /**
   * Create a new Scene
   *
   * @param {Element} canvas The Canvas to be used for rendering
   */
  constructor(canvas) {
    this.canvas = canvas;
  }

  /**
   * Gets the value of a property, stripping off
   * the 'px' suffix.
   * @param {Element} element The element to get the property from
   * @param {string} property The property name
   * @return {string} The value of the property, without 'px' at the end
   */
  getPropertyWithoutPx(element, property) {
    return window
        .getComputedStyle(element)
        .getPropertyValue(property)
        .slice(0, -2);
  }

  /**
   * Fix the DPI of the canvas so rendered elements
   * aren't blurry
   */
  fixDpi() {
    const dpi = window.devicePixelRatio;
    const canvasHeight = this.getPropertyWithoutPx(this.canvas, 'height');
    const canvasWidth = this.getPropertyWithoutPx(this.canvas, 'width');
    canvas.setAttribute('height', canvasHeight * dpi);
    canvas.setAttribute('width', canvasWidth * dpi);
  }

  /**
   * Get an adjusted X position for rendering
   * (taking into account modified canvas size, DPI, etc.)
   * @param {number} x The original, unadjusted, x value
   * @return {number} An x value adjusted for canvas size, etc.
   */
  getAdjustedXPosition(x) {
    const rect = this.canvas.getBoundingClientRect();
    const elementRelativeX = x - rect.left;
    const adjustedX = elementRelativeX * canvas.width / rect.width;

    return adjustedX;
  }

  /**
   * Get an adjusted Y position for rendering
   * (taking into account modified canvas size, DPI, etc.)
   * @param {number} y The original, unadjusted, y value
   * @return {number} An y value adjusted for canvas size, etc.
   */
  getAdjustedYPosition(y) {
    const rect = this.canvas.getBoundingClientRect();
    const elementRelativeY = y - rect.top;
    const adjustedY = elementRelativeY * canvas.height / rect.height;

    return adjustedY;
  }

  /**
   * Get the dimensions of the scene
   * @return {object} An object representing the top/left/right/bottom
   * of the scene
   */
  getDimensions() {
    const rect = this.canvas.getBoundingClientRect();

    return {
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
    };
  }

  /**
   * Clear the canvas. Used to ensure there aren't
   * visual artefacts between frames
   */
  clearCanvas() {
    const renderContext = this.canvas.getContext('2d');
    renderContext.clearRect(0, 0, canvas.width, canvas.height);
  }

  /**
   * Perform per-frame setup of the scene
   */
  sceneSetup() {
    // Fix the DPI on every frame, in case its changed
    this.fixDpi();
    this.clearCanvas();
  }

  /**
   * Draw a circle
   * @param {number} x The X position to draw the circle
   * @param {number} y The Y position to draw the circle
   * @param {number} radius The radius of the circle
   * @param {string} color The hex code color of the circle
   */
  drawCircle(x, y, radius, color) {
    const renderContext = this.canvas.getContext('2d');
    renderContext.beginPath();
    const adjustedX = this.getAdjustedXPosition(x);
    const adjustedY = this.getAdjustedYPosition(y);
    renderContext.fillStyle = '#' + color;
    renderContext.arc(adjustedX, adjustedY, radius, 0, 2 * Math.PI);
    renderContext.fill();
    renderContext.closePath();
  }
}

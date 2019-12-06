/**
 * The entry point to the Bouncing Ball
 * Application
 */
class BouncingBallApplication {
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
   * Gets a relative cursor position from a click event,
   * adjusting for the position and DPI scaling of the canvas
   * @param {Event} evt The event object triggered by a click
   * @param {Element} canvas The canvas that was clicked
   * @return {object} An object with the X and Y positions
   * of the click
   */
  getCursorPosition(evt, canvas) {
    const rect = canvas.getBoundingClientRect();
    const elementRelativeX = evt.clientX - rect.left;
    const elementRelativeY = evt.clientY - rect.top;
    const x = elementRelativeX * canvas.width / rect.width;
    const y = elementRelativeY * canvas.height / rect.height;

    return {
      x: x,
      y: y,
    };
  }

  /**
   * Fix the DPI of the canvas so rendered elements
   * aren't blurry
   * @param {Element} canvas The canvas to adjust the DPI of
   */
  fixDpi(canvas) {
    const dpi = window.devicePixelRatio;
    const canvasHeight = this.getPropertyWithoutPx(canvas, 'height');
    const canvasWidth = this.getPropertyWithoutPx(canvas, 'width');
    canvas.setAttribute('height', canvasHeight * dpi);
    canvas.setAttribute('width', canvasWidth * dpi);
  }

  /**
   * Create a new Bouncing Ball Application, and
   * perform all the necessary initial setup.
   */
  constructor() {
    const canvas = document.getElementById('canvas');
    this.fixDpi(canvas);

    canvas.addEventListener('click', (evt) => {
      const renderContext = canvas.getContext('2d');
      renderContext.beginPath();
      const circlePosition = this.getCursorPosition(evt, canvas);
      renderContext.arc(circlePosition.x, circlePosition.y, 10, 0, 2 * Math.PI);
      renderContext.fill();
      renderContext.closePath();
    });
  }
}

(function() {
  new BouncingBallApplication();
})();

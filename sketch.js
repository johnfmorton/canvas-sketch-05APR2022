// Import the library
const canvasSketch = require('canvas-sketch');

// Specify some output parameters
const settings = {
  // The [ width, height ] of the artwork in pixels
  dimensions: [ 300, 250 ]
};

const startXScale = Math.random();

// Start the sketch
const sketch = () => {



  return (props) => {
    // Destructure what we need from props
    const { context, width, height } = props;

    const offsetX = (width/5) * startXScale;
    const offsetY = (height/5) * startXScale;

    // Fill the canvas with #03a4c1
    context.fillStyle = '#03a4c1';
    context.fillRect(0, 0, width, height);

    // Now draw a white rectangle in the center
    context.strokeStyle = '#00ff0020';
    context.lineWidth = 4;
    context.strokeRect((width - offsetX) / 4, (height - offsetY) / 4, (width - offsetX) / 2, (height - offsetY) / 2);
    // context.strokeStyle = 'rbga(25,0,0,0.5)';
    context.strokeStyle = '#ff00a350';
    context.strokeRect((width + offsetX) / 4, (height + offsetY) / 4, (width + offsetX) / 2, (height + offsetY) / 2);
  };
};

// Start the sketch with parameters
canvasSketch(sketch, settings);

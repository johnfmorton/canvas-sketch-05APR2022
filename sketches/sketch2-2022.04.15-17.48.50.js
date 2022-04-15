const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 300, 250 ]
};

const colors = ['#ff00ff', '#00ffff', '#ff0000', '#00ff00', '#0000ff'];

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    let grid = [];

    let cols = 24;
    let rows = 20;

    for (let i = 0; i < cols; i++) {
      grid.push([]);
      for (let j = 0; j < cols; j++) {
        grid[i].push(Math.random() > 0.5 ? 1 : 0);
      }
    }


    const drawCell = (x, y) => {
      context.fillStyle = getRandomColor();
      context.fillRect(x * width / cols, y * height / rows, width / cols, height / rows);
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j] === 1) {
          drawCell(i, j);
        }
      }
    }

  };
};

canvasSketch(sketch, settings);


const reloadButton = document;

reloadButton.addEventListener('click', () => {
  location.reload();
  // canvasSketch(sketch, settings);
  // canvasSketch.render();
});

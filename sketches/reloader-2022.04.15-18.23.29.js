const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [300, 250],
  pixelRatio: 2,
  pixelated: true,
};

// const colors = ['#ff00ff', '#00ffff', '#ff0000', '#00ff00', '#0000ff', '#abed32'];

const colors = [
  "#f2c5d2",
  "#e5bb57",
  "#9c96cd",
  "#76b995",
  "#70a7c5",
  "#f8e6d1",
  "#dfbcab"
];

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

const createInterface = () => {
  const reloadButton = document.createElement('button');
  reloadButton.id = 'reload-button';
  reloadButton.innerText = 'Reload';
  reloadButton.style.position = 'absolute';
  reloadButton.style.top = '10px';
  reloadButton.style.left = '10px';

  document.body.appendChild(reloadButton);


  const exportButton = document.createElement('button');
  exportButton.id = 'export-button';
  exportButton.innerText = 'Export';
  exportButton.style.position = 'absolute';
  exportButton.style.top = '10px';
  exportButton.style.left = '75px';

  document.body.appendChild(exportButton);
}

createInterface();

const sketch = ({ render, exportFrame }) => {

  const reloadButton = document.getElementById('reload-button');

  // Re-render on click
  reloadButton.addEventListener('click', () => render());


  const exportButton = document.getElementById('export-button');
  exportButton.addEventListener('click', () => exportFrame());

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    let grid = [];

    let cols = 12;
    let rows = 10;

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

    const drawCircle = (x, y) => {
      let radius = width / cols / 2;
      context.beginPath();
      context.arc(x * width/1 / cols/1, y * height/1 / rows/1, width/1 / cols/1, 0, 2 * Math.PI);
      // context.arc(x * width / cols, y * height / rows, width / cols, 0, 2 * Math.PI);
      context.fillStyle = getRandomColor();
      context.fill();
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j] === 1) {
          drawCell(i, j);

        } else {
          drawCircle(i, j);
        }
      }
    }

  };
};

canvasSketch(sketch, settings);

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const points = input.map(line => {
  const [x, y] = line.split(' ').map(Number);
  return { x, y };
});

const xValues = points.map(point => point.x);
const yValues = points.map(point => point.y);

const fourthX = xValues.reduce((acc, cur) => acc ^ cur, 0);
const fourthY = yValues.reduce((acc, cur) => acc ^ cur, 0);

console.log(`${fourthX} ${fourthY}`);

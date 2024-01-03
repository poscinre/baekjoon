const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const points = input.slice(1, N + 1).map(line => {
  const [x, y] = line.split(' ').map(Number);
  return { x, y };
});

points.sort((a, b) => {
  if (a.x === b.x) {
    return a.y - b.y;
  }
  return a.x - b.x;
});

const output = points.map(point => `${point.x} ${point.y}`).join('\n');
console.log(output);

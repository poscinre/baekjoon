const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const points = input.slice(1).map(line => line.split(' ').map(Number));

points.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

console.log(points.map(point => point.join(' ')).join('\n'));

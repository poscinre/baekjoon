const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const points = input.slice(1).map(line => line.split(' ').map(Number));

function findMinimumBoundingRectangle(points) {
  let min_x = Number.MAX_SAFE_INTEGER;
  let max_x = Number.MIN_SAFE_INTEGER;
  let min_y = Number.MAX_SAFE_INTEGER;
  let max_y = Number.MIN_SAFE_INTEGER;

  points.forEach(point => {
    min_x = Math.min(min_x, point[0]);
    max_x = Math.max(max_x, point[0]);
    min_y = Math.min(min_y, point[1]);
    max_y = Math.max(max_y, point[1]);
  });

  return (max_x - min_x) * (max_y - min_y);
}

const area = findMinimumBoundingRectangle(points);

console.log(area);

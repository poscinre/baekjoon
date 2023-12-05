const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [x, y, w, h] = input[0].split(' ').map(Number);

const distanceX = Math.min(x, w - x);
const distanceY = Math.min(y, h - y);

const answer = Math.min(distanceX, distanceY);

console.log(answer);

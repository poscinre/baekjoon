const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const T = parseInt(input[0]);
const results = [];

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  const sum = A + B;
  results.push(sum);
}

console.log(results.join('\n'));

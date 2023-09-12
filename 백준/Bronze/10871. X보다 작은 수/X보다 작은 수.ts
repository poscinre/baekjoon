const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const sequence = input[1].split(' ').map(Number);

const result = [];
for (let i = 0; i < n; i++) {
  if (sequence[i] < x) {
    result.push(sequence[i]);
  }
}

console.log(result.join(' '));
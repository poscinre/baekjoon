const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const baskets = Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  const [start, end, number] = input[i].split(' ').map(Number);
  for (let j = start - 1; j < end; j++) {
    baskets[j] = number;
  }
}

console.log(baskets.join(' '));

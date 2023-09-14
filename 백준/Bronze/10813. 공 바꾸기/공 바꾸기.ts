const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  const temp = baskets[a - 1];
  baskets[a - 1] = baskets[b - 1];
  baskets[b - 1] = temp;
}

console.log(baskets.join(' '));

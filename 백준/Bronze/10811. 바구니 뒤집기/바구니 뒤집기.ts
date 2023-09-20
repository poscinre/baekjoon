const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  const reversed = baskets.slice(start - 1, end).reverse();
  for (let j = start - 1, k = 0; j < end; j++, k++) {
    baskets[j] = reversed[k];
  }
}

console.log(baskets.join(' '));

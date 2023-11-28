const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const divisors = [];
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisors.push(i);
  }
}

if (K <= divisors.length) {
  console.log(divisors[K - 1]);
} else {
  console.log(0);
}

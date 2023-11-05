const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const numbers = input[1];

let sum = 0;

for (let i = 0; i < N; i++) {
  const digit = Number(numbers[i]);
  sum += digit;
}

console.log(sum);

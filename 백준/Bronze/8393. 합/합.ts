const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = parseInt(input);

function calculateSum(n: number): number {
  return (n * (n + 1)) / 2;
}

const sum = calculateSum(n);
console.log(sum);
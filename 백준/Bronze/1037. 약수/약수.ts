const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const count = parseInt(input[0]);
const divisors = input[1].split(' ').map(Number);

let maxDivisor = Math.max(...divisors);
let minDivisor = Math.min(...divisors);
let N = maxDivisor * minDivisor;

console.log(N);

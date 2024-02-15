const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

const combinations = N * (N - 1);
console.log(combinations);

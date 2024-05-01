const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10);
const A = new Set(input[1].split(' ').map(x => parseInt(x, 10)));
const M = parseInt(input[2], 10);
const numbersToCheck = input[3].split(' ').map(x => parseInt(x, 10));

const results = numbersToCheck.map(x => A.has(x) ? 1 : 0);

console.log(results.join('\n'));

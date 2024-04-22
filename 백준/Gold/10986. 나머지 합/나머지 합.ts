const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

let prefixSum = 0;
let remainderCounts = new Array(M).fill(0);
let result = 0;

for (let i = 0; i < N; i++) {
    prefixSum = (prefixSum + numbers[i]) % M;
    if (prefixSum === 0) result++;
    result += remainderCounts[prefixSum];
    remainderCounts[prefixSum]++;
}

console.log(result);
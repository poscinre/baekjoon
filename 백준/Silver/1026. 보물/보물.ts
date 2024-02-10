const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let sum = 0;
A.sort((a, b) => a - b);
B.sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
    sum += A[i] * B[i];
}

console.log(sum);
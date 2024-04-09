const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);

const increasing = new Array(N).fill(1);
for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (A[i] > A[j] && increasing[i] < increasing[j] + 1) {
            increasing[i] = increasing[j] + 1;
        }
    }
}

const decreasing = new Array(N).fill(1);
for (let i = N - 2; i >= 0; i--) {
    for (let j = N - 1; j > i; j--) {
        if (A[i] > A[j] && decreasing[i] < decreasing[j] + 1) {
            decreasing[i] = decreasing[j] + 1;
        }
    }
}

let maxLength = 0;
for (let i = 0; i < N; i++) {
    const length = increasing[i] + decreasing[i] - 1;
    if (length > maxLength) {
        maxLength = length;
    }
}

console.log(maxLength);
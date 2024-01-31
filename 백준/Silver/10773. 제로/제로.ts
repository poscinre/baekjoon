const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const K = parseInt(input[0]);
const numbers = input.slice(1).map(Number);

const stack = [];

for (let i = 0; i < K; i++) {
    if (numbers[i] === 0) {
        stack.pop();
    } else {
        stack.push(numbers[i]);
    }
}

const sum = stack.reduce((acc, val) => acc + val, 0);
console.log(sum);
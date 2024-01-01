const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);

let numbers = [];
for (let i = 1; i <= N; i++) {
    numbers.push(parseInt(input[i]));
}

numbers.sort((a, b) => a - b);

console.log(numbers.join('\n'));

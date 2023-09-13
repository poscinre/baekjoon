const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

let max = -1;
let maxIndex = -1;

for (let i = 0; i < 9; i++) {
    if (input[i] > max) {
        max = input[i];
        maxIndex = i + 1;
    }
}

console.log(max);
console.log(maxIndex);

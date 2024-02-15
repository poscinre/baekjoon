const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const N = parseInt(input[0]);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(N));

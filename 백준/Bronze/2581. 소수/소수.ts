const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const M = parseInt(input[0]);
const N = parseInt(input[1]);

let sum = 0;
let minPrime = Infinity;

for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
        sum += i;
        minPrime = Math.min(minPrime, i);
    }
}

if (sum === 0) {
    console.log(-1);
} else {
    console.log(sum);
    console.log(minPrime);
}
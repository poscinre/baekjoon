const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function sieveOfEratosthenes(max) {
    const isPrime = new Array(max + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= max; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= max; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime;
}

const maxN = 123456;
const maxRange = 2 * maxN;
const isPrime = sieveOfEratosthenes(maxRange);

input.forEach(n => {
    n = parseInt(n);
    if (n === 0) return;

    let primeCount = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
        if (isPrime[i]) primeCount++;
    }

    console.log(primeCount);
});
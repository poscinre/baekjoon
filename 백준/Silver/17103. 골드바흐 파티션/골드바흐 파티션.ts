function findPrimes(max) {
    const isPrime = new Array(max + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= max; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= max; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime;
}

function goldbachPartitionCount(N, primes) {
    let count = 0;
    for (let i = 2; i <= N / 2; i++) {
        if (primes[i] && primes[N - i]) {
            count++;
        }
    }
    return count;
}

function main(input) {
    const lines = input.split('\n');
    const T = parseInt(lines[0]);
    const primes = findPrimes(1000000);

    for (let i = 1; i <= T; i++) {
        const N = parseInt(lines[i]);
        console.log(goldbachPartitionCount(N, primes));
    }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
main(input);
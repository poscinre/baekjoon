const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

function primeFactorization(num) {
    const factors = [];

    for (let i = 2; i <= Math.sqrt(num); i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }

    if (num > 1) {
        factors.push(num);
    }

    return factors;
}

if (N !== 1) {
    const result = primeFactorization(N);
    result.forEach(factor => console.log(factor));
}

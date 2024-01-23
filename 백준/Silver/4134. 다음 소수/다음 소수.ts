function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findNextPrime(n) {
    while (!isPrime(n)) {
        n++;
    }
    return n;
}

require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).forEach(testCase => {
    const n = parseInt(testCase);
    console.log(findNextPrime(n));
});

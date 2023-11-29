const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let idx = 0;

function isPerfectNumber(n) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                sum += i;
            } else {
                sum += i + n / i;
            }
        }
    }
    return sum === n;
}

while (true) {
    const n = parseInt(input[idx++]);
    if (n === -1) break;
    
    if (isPerfectNumber(n)) {
        const divisors = [];
        for (let i = 1; i <= n / 2; i++) {
            if (n % i === 0) {
                divisors.push(i);
            }
        }
        console.log(`${n} = ${divisors.join(' + ')}`);
    } else {
        console.log(`${n} is NOT perfect.`);
    }
}
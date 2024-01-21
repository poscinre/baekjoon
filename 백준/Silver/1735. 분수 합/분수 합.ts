function gcd(a, b) {
    while (b != 0) {
        var r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function calculateFraction(a1, b1, a2, b2) {
    const lcm = b1 * b2 / gcd(b1, b2);

    const numerator = a1 * (lcm / b1) + a2 * (lcm / b2);

    const divisor = gcd(numerator, lcm);

    return [numerator / divisor, lcm / divisor];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a1, b1] = input[0].split(' ').map(Number);
const [a2, b2] = input[1].split(' ').map(Number);

const [numerator, denominator] = calculateFraction(a1, b1, a2, b2);

console.log(`${numerator} ${denominator}`);

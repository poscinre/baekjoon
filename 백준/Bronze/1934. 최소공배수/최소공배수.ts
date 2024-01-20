const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function gcd(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const numbers = input[i].split(' ').map(Number);
    const A = numbers[0];
    const B = numbers[1];
    
    console.log(lcm(A, B));
}
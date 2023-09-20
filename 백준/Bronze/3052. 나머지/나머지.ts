const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

const remainders = new Set();

for (let i = 0; i < 10; i++) {
    const remainder = input[i] % 42;
    remainders.add(remainder);
}

console.log(remainders.size);

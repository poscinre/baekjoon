const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    const result = A + B;
    console.log(`Case #${i}: ${A} + ${B} = ${result}`);
}

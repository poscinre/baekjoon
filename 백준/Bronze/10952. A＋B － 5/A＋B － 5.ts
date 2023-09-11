const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(' ').map(Number);

    if (A === 0 && B === 0) {
        break;
    }

    const result = A + B;
    console.log(result);
}

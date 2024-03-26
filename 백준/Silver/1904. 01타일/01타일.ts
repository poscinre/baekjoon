const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

function countBinarySequences(N) {
    if (N === 1) return 1;
    if (N === 2) return 2;

    let prevPrev = 1;
    let prev = 2;
    let current;

    for (let i = 3; i <= N; i++) {
        current = (prevPrev + prev) % 15746;
        prevPrev = prev;
        prev = current;
    }

    return current;
}

console.log(countBinarySequences(N));
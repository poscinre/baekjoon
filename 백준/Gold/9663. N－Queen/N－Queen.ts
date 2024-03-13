const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const N = parseInt(input[0]);

let count = 0;
let col = Array(N).fill(0);
let diag1 = Array(2 * N - 1).fill(0);
let diag2 = Array(2 * N - 1).fill(0);

function solve(row) {
    if (row === N) {
        count++;
        return;
    }

    for (let i = 0; i < N; i++) {
        if (col[i] || diag1[row + i] || diag2[row - i + N - 1]) continue;

        col[i] = diag1[row + i] = diag2[row - i + N - 1] = 1;
        solve(row + 1);
        col[i] = diag1[row + i] = diag2[row - i + N - 1] = 0;
    }
}

solve(0);
console.log(count);
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let setS = new Set(input.slice(1, N + 1));
let count = 0;

for (let i = N + 1; i < N + 1 + M; i++) {
    if (setS.has(input[i])) count++;
}

console.log(count);

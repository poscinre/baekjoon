const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const lines = input.slice(1).map(line => line.split(' ').map(Number));

lines.sort((a, b) => a[0] - b[0]);

const lis = Array(N).fill(1);
for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (lines[i][1] > lines[j][1] && lis[i] < lis[j] + 1) {
            lis[i] = lis[j] + 1;
        }
    }
}

const result = N - Math.max(...lis);
console.log(result);
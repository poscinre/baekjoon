const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const P = input[1].split(' ').map(Number);

P.sort((a, b) => a - b);

let totalWaitingTime = 0;
let cumulativeTime = 0;

for (let i = 0; i < N; i++) {
  cumulativeTime += P[i];
  totalWaitingTime += cumulativeTime;
}

console.log(totalWaitingTime);
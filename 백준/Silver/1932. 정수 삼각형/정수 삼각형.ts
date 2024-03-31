const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const triangle = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from(Array(n), () => Array(n).fill(0));

dp[0][0] = triangle[0][0];

for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0) {
            dp[i][j] = dp[i - 1][j] + triangle[i][j];
        } else if (j === i) {
            dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
        } else {
            dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
        }
    }
}

let maxSum = 0;
for (let i = 0; i < n; i++) {
    maxSum = Math.max(maxSum, dp[n - 1][i]);
}

console.log(maxSum);
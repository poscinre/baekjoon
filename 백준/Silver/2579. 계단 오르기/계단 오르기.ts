const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const scores = input.slice(1).map(Number);
const dp = new Array(n).fill(0);

dp[0] = scores[0];
dp[1] = Math.max(scores[0] + scores[1], scores[1]);
dp[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2]);

for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + scores[i], dp[i - 3] + scores[i - 1] + scores[i]);
}

console.log(dp[n - 1]);
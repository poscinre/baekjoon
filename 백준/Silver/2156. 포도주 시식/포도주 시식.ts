const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const wines = input.slice(1).map(Number);

function maxWineAmount(wines) {
    const dp = [];

    dp[0] = wines[0];
    dp[1] = wines[0] + wines[1];
    dp[2] = Math.max(dp[1], Math.max(wines[0] + wines[2], wines[1] + wines[2]));

    for (let i = 3; i < wines.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + wines[i], dp[i - 3] + wines[i - 1] + wines[i]);
    }

    return dp[wines.length - 1];
}

console.log(maxWineAmount(wines));
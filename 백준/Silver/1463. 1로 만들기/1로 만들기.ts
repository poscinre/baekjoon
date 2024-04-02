const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

function minOperationsTo1(N) {
    const dp = new Array(N + 1).fill(0);
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + 1;
        
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }
        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
    }
    
    return dp[N];
}
console.log(minOperationsTo1(N));
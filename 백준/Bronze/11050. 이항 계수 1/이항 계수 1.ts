const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

function binomialCoefficient(N, K) {
    if (K === 0 || K === N) return 1;
    if (K === 1 || K === N - 1) return N;

    const dp = new Array(K + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= N; i++) {
        for (let j = Math.min(i, K); j > 0; j--) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[K];
}

console.log(binomialCoefficient(N, K));
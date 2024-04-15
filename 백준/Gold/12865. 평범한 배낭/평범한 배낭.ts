function knapsack(N, K, weights, values) {
    const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

    for (let i = 1; i <= N; i++) {
        const weight = weights[i - 1];
        const value = values[i - 1];

        for (let j = 1; j <= K; j++) {
            if (weight <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[N][K];
}

const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const weights = [];
const values = [];

for (let i = 1; i <= N; i++) {
    const [W, V] = input[i].split(' ').map(Number);
    weights.push(W);
    values.push(V);
}

const result = knapsack(N, K, weights, values);
console.log(result);
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const N = parseInt(input[0]);

const dp = Array.from(Array(N + 1), () => Array(10).fill(0));
for (let i = 1; i < 10; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
        if (j === 0) {
            dp[i][j] = dp[i - 1][1];
        } else if (j === 9) {
            dp[i][j] = dp[i - 1][8];
        } else {
            dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
        }
    }
}

let answer = 0;
for (let i = 0; i < 10; i++) {
    answer = (answer + dp[N][i]) % 1000000000;
}

console.log(answer);
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const string1 = input[0];
const string2 = input[1];

function LCSLength(string1, string2) {
    const m = string1.length;
    const n = string2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (string1[i - 1] === string2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

const result = LCSLength(string1, string2);
console.log(result);
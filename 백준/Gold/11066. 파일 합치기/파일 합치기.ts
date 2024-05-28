const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let index = 0;
const T = parseInt(input[index++]);

for (let t = 0; t < T; t++) {
  const K = parseInt(input[index++]);
  const fileSizes = input[index++].split(' ').map(Number);
  const prefixSum = Array(K + 1).fill(0);
  const dp = Array.from(Array(K), () => Array(K).fill(Infinity));

  for (let i = 1; i <= K; i++) {
    prefixSum[i] = prefixSum[i - 1] + fileSizes[i - 1];
  }

  for (let i = 0; i < K; i++) {
    dp[i][i] = 0;
  }

  for (let len = 2; len <= K; len++) {
    for (let i = 0; i <= K - len; i++) {
      let j = i + len - 1;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + prefixSum[j + 1] - prefixSum[i]);
      }
    }
  }

  console.log(dp[0][K - 1]);
}
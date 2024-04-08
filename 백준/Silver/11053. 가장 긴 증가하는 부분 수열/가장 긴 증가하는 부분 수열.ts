const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);

function longestIncreasingSubsequenceLength(arr) {
    const dp = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(longestIncreasingSubsequenceLength(A));
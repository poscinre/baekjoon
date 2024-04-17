const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const temperatures = input[1].split(' ').map(Number);

function findMaxTemperatureSum(N, K, temperatures) {
    let maxSum = -Infinity;

    for (let i = 0; i <= N - K; i++) {
        let sum = 0;
        for (let j = i; j < i + K; j++) {
            sum += temperatures[j];
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

const result = findMaxTemperatureSum(N, K, temperatures);
console.log(result);
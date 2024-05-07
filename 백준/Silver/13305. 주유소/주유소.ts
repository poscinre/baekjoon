const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const distances = input[1].split(' ').map(Number);
const prices = input[2].split(' ').map(Number);

let minCost = 0;
let minPrice = prices[0];
for (let i = 0; i < N - 1; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i];
    }
    minCost += minPrice * distances[i];
}

console.log(minCost);
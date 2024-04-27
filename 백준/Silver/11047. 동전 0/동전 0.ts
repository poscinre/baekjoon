const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const coins = [];
for (let i = 1; i <= N; i++) {
  coins.push(Number(input[i]));
}

let amount = K;
let coinCount = 0;

for (let i = N - 1; i >= 0; i--) {
  if (coins[i] <= amount) {
    const count = Math.floor(amount / coins[i]);
    coinCount += count;
    amount -= coins[i] * count;
  }
}

console.log(coinCount);
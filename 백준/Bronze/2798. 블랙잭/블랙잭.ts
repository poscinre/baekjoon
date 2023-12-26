const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);

function findClosestBlackjackSum(cards, N, M) {
    let bestSum = 0;

    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                let sum = cards[i] + cards[j] + cards[k];
                if (sum > bestSum && sum <= M) {
                    bestSum = sum;
                }
            }
        }
    }

    return bestSum;
}

console.log(findClosestBlackjackSum(cards, N, M));
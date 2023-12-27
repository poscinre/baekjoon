function findMinimumBags(N) {
    let fiveKgBags = Math.floor(N / 5);
    let remainingWeight = N % 5;

    while (fiveKgBags >= 0) {
        if (remainingWeight % 3 === 0) {
            return fiveKgBags + (remainingWeight / 3);
        }
        fiveKgBags--;
        remainingWeight += 5;
    }

    return -1;
}

const input = require('fs').readFileSync('dev/stdin').toString().trim();
const N = parseInt(input, 10);

console.log(findMinimumBags(N));

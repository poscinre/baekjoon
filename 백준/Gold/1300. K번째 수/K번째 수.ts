const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10);
const k = parseInt(input[1], 10);

function countLessThanOrEqual(x) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        count += Math.min(N, Math.floor(x / i));
    }
    return count;
}

function findKthNumber(N, k) {
    let left = 1;
    let right = N * N;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (countLessThanOrEqual(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

console.log(findKthNumber(N, k));

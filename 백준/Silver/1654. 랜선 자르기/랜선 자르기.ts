const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [K, N] = input[0].split(' ').map(Number);
const lengths = input.slice(1, K + 1).map(Number);

let low = 1;
let high = Math.max(...lengths);

while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = 0;
    for (let length of lengths) {
        count += Math.floor(length / mid);
    }
    if (count >= N) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

console.log(high);
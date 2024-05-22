const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0].trim(), 10);
const A = input[1].trim().split(' ').map(Number);

function findLISLength(A) {
    const LIS = [];
    for (let num of A) {
        if (LIS.length === 0 || num > LIS[LIS.length - 1]) {
            LIS.push(num);
        } else {
            let low = 0, high = LIS.length - 1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (LIS[mid] < num) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            LIS[low] = num;
        }
    }

    return LIS.length;
}

console.log(findLISLength(A));
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let low = 0;
let high = Math.max(...trees);

const getWood = (height) => {
    let total = 0;
    for (let tree of trees) {
        if (tree > height) {
            total += tree - height;
        }
    }
    return total;
};

let result = 0;
while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const obtained = getWood(mid);
    if (obtained >= M) {
        result = mid;
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

console.log(result);
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const paper = input.slice(1).map(line => line.split(' ').map(Number));

let whiteCount = 0;
let blueCount = 0;

function countPapers(x, y, size) {
    if (size === 1) {
        if (paper[x][y] === 0) whiteCount++;
        else blueCount++;
        return;
    }

    let isUniform = true;
    const firstColor = paper[x][y];

    outerLoop:
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (paper[i][j] !== firstColor) {
                isUniform = false;
                break outerLoop;
            }
        }
    }

    if (isUniform) {
        if (firstColor === 0) whiteCount++;
        else blueCount++;
    } else {
        let halfSize = size / 2;
        countPapers(x, y, halfSize);
        countPapers(x + halfSize, y, halfSize);
        countPapers(x, y + halfSize, halfSize);
        countPapers(x + halfSize, y + halfSize, halfSize);
    }
}

countPapers(0, 0, N);

console.log(whiteCount);
console.log(blueCount);
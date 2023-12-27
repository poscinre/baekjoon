const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(" ").map(Number);
const board = input.map(row => row.split(""));

function countDraws(board, startX, startY) {
    let countBlackStart = 0;
    let countWhiteStart = 0;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const isBlackCell = (i + j) % 2 === 0;
            const cell = board[startX + i][startY + j];

            if ((isBlackCell && cell !== 'B') || (!isBlackCell && cell === 'B')) {
                countBlackStart++;
            }
            if ((isBlackCell && cell !== 'W') || (!isBlackCell && cell === 'W')) {
                countWhiteStart++;
            }
        }
    }

    return Math.min(countBlackStart, countWhiteStart);
}

let minCount = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        minCount = Math.min(minCount, countDraws(board, i, j));
    }
}

console.log(minCount);
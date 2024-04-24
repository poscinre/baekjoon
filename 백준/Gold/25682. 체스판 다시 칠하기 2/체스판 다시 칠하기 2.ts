const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;
const [N, M, K] = input[index++].split(' ').map(Number);
const board = [];

for (let i = 0; i < N; i++) {
    board.push(input[index++].trim().split(''));
}

function minimal_board(color) {
    let count = Number.MAX_VALUE;
    const prefix_sum = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            const value = ((i + j) % 2 === 0) ? (board[i][j] !== color ? 1 : 0) : (board[i][j] === color ? 1 : 0);
            prefix_sum[i + 1][j + 1] = prefix_sum[i][j + 1] + prefix_sum[i + 1][j] - prefix_sum[i][j] + value;
        }
    }

    for (let i = 1; i <= N - K + 1; i++) {
        for (let j = 1; j <= M - K + 1; j++) {
            const newCount = prefix_sum[i + K - 1][j + K - 1] - prefix_sum[i + K - 1][j - 1] - prefix_sum[i - 1][j + K - 1] + prefix_sum[i - 1][j - 1];
            count = Math.min(count, newCount);
        }
    }

    return count;
}

console.log(Math.min(minimal_board('B'), minimal_board('W')));

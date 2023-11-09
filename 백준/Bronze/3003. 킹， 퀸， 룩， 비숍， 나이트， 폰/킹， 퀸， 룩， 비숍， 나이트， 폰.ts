const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const pieces = input[0].split(' ').map(Number);

const correctPieces = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < 6; i++) {
    const diff = correctPieces[i] - pieces[i];
    console.log(diff);
}

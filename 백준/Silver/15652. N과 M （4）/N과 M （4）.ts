const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

function generateSequence(N, M, currentSequence = [], start = 1) {
    if (M === 0) {
        console.log(currentSequence.join(' '));
        return;
    }

    for (let i = start; i <= N; i++) {
        currentSequence.push(i);
        generateSequence(N, M - 1, currentSequence, i);
        currentSequence.pop();
    }
}

generateSequence(N, M);
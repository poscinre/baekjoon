const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

function getSequences(N, M) {
    const result = [];

    function dfs(sequence) {
        if (sequence.length === M) {
            result.push(sequence.join(' '));
            return;
        }

        for (let i = 1; i <= N; i++) {
            sequence.push(i);
            dfs(sequence);
            sequence.pop();
        }
    }

    dfs([]);
    return result;
}

const sequences = getSequences(N, M);
console.log(sequences.join('\n'));
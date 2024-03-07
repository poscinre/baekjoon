const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

function permutation(arr, selected, n, m, result) {
    if (selected.length === m) {
        result.push(selected.join(' '));
        return;
    }
    for (let i = 0; i < n; i++) {
        if (!selected.includes(arr[i])) {
            selected.push(arr[i]);
            permutation(arr, selected, n, m, result);
            selected.pop();
        }
    }
}

const numbers = [];
for (let i = 1; i <= N; i++) {
    numbers.push(i);
}

const result = [];
permutation(numbers, [], N, M, result);

console.log(result.join('\n'));
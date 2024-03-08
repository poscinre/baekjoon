const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N = parseInt(input[0]);
const M = parseInt(input[1]);

let output = '';

function dfs(depth, sequence, visited) {
    if (depth === M) {
        output += sequence.join(' ') + '\n';
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            if (depth === 0 || sequence[depth - 1] < i) {
                visited[i] = true;
                sequence[depth] = i;
                dfs(depth + 1, sequence, visited);
                visited[i] = false;
            }
        }
    }
}

dfs(0, [], Array(N + 1).fill(false));
console.log(output);
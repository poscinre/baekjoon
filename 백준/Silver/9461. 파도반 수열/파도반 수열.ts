const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').slice(1);

function findP(N) {
    const p = [1, 1, 1];
    for (let i = 3; i < N; i++) {
        p[i] = p[i - 2] + p[i - 3];
    }
    return p[N - 1];
}

input.forEach((N) => {
    console.log(findP(parseInt(N)));
});
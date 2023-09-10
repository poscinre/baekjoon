const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
    const spaces = ' '.repeat(N - i);
    const stars = '*'.repeat(i);
    console.log(spaces + stars);
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const S = input[0];
const q = parseInt(input[1]);
const queries = input.slice(2).map(query => query.split(' '));

function countOccurrencesInRange(str, alpha, l, r) {
    let count = 0;
    for (let i = l; i <= r; i++) {
        if (str[i] === alpha) {
            count++;
        }
    }
    return count;
}

for (let i = 0; i < q; i++) {
    const [alpha, l, r] = queries[i];
    const result = countOccurrencesInRange(S, alpha, parseInt(l), parseInt(r));
    console.log(result);
}
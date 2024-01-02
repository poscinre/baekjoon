const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function sortDescending(n) {
    return n.split('').sort((a, b) => b - a).join('');
}

const sortedNumber = sortDescending(input);
console.log(sortedNumber);

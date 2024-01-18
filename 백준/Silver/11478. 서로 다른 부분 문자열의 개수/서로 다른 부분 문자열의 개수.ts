const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function countUniqueSubstrings(str) {
    const uniqueSubstrings = new Set();

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            uniqueSubstrings.add(str.substring(i, j));
        }
    }

    return uniqueSubstrings.size;
}

const result = countUniqueSubstrings(input);
console.log(result);
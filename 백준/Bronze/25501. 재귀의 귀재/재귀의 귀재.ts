const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

function recursion(s, l, r, count) {
    if (l >= r) return [1, count];
    else if (s[l] !== s[r]) return [0, count];
    else return recursion(s, l + 1, r - 1, count + 1);
}

function isPalindrome(s) {
    const len = s.length;
    const [result, count] = recursion(s, 0, len - 1, 1);
    return [result, count];
}

function solveTestCases(input) {
    const T = parseInt(input[0]);
    const testCases = input.slice(1);

    for (let i = 0; i < T; i++) {
        const [result, count] = isPalindrome(testCases[i]);
        console.log(`${result} ${count}`);
    }
}

solveTestCases(input);
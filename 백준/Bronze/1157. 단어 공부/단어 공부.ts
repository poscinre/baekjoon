const input = require('fs').readFileSync('dev/stdin').toString().trim();
const word = input.toLowerCase();
const alphabetCount = new Array(26).fill(0);

for (let i = 0; i < word.length; i++) {
  const charCode = word.charCodeAt(i);
  if (charCode >= 97 && charCode <= 122) {
    alphabetCount[charCode - 97]++;
  }
}

let maxCount = 0;
let maxCountChar = '';

for (let i = 0; i < 26; i++) {
  if (alphabetCount[i] > maxCount) {
    maxCount = alphabetCount[i];
    maxCountChar = String.fromCharCode(i + 97);
  } else if (alphabetCount[i] === maxCount) {
    maxCountChar = '?';
  }
}

console.log(maxCountChar.toUpperCase());

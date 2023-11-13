const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const words = input.slice(1);

function isGroupWord(word) {
  const letterMap = new Map();

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letterMap.has(letter) && letterMap.get(letter) !== word[i - 1]) {
      return false;
    }
    letterMap.set(letter, letter);
  }

  return true;
}

let groupWordCount = 0;

for (const word of words) {
  if (isGroupWord(word)) {
    groupWordCount++;
  }
}

console.log(groupWordCount);
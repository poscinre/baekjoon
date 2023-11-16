const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const maxWordLength = Math.max(...input.map(word => word.length));
let result = '';

for (let i = 0; i < maxWordLength; i++) {
  for (let j = 0; j < 5; j++) {
    if (i < input[j].length) {
      result += input[j][i];
    }
  }
}

console.log(result);

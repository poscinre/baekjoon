const input = require('fs').readFileSync('dev/stdin').toString().trim();

const alphabetPositions = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const char = input.charAt(i);
  const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);

  if (alphabetPositions[charCode] === -1) {
    alphabetPositions[charCode] = i;
  }
}

console.log(alphabetPositions.join(' '));

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord ? 1 : 0;
}

console.log(isPalindrome(input));

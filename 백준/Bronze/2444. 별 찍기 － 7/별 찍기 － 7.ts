const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

function printStars(N) {
  for (let i = 1; i <= N; i++) {
    let spaces = ' '.repeat(N - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  for (let i = N - 1; i >= 1; i--) {
    let spaces = ' '.repeat(N - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

printStars(N);
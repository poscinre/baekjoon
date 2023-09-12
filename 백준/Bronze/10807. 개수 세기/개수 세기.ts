const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const N = parseInt(input[0]);
const integers = input[1].split(' ').map(Number);
const v = parseInt(input[2]);

let count = 0;
for (let i = 0; i < N; i++) {
  if (integers[i] === v) {
    count++;
  }
}

console.log(count);
const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const [A, B] = input.trim().split(' ').map(Number);

if (A > B) {
  console.log('>');
} else if (A < B) {
  console.log('<');
} else {
  console.log('==');
}
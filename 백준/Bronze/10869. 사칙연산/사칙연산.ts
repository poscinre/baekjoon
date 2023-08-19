const [A, B] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number); console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
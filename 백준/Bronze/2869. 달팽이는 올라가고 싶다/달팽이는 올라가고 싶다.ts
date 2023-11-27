const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [A, B, V] = input[0].split(' ').map(Number);

const days = Math.ceil((V - B) / (A - B));
console.log(days);

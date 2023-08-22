const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.trim().split('\n');

const a = parseInt(lines[0], 10);
const b = lines[1];

const a1 = a * parseInt(b[2], 10);
const a2 = a * parseInt(b[1], 10);
const a3 = a * parseInt(b[0], 10);
const a4 = a * parseInt(b, 10);

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
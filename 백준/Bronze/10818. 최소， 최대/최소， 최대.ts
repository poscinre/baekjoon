const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const N = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log(`${minValue} ${maxValue}`);

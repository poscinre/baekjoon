const inputs = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let voca = inputs[0].toString();
let num = Number(inputs[1]);

console.log(voca[num-1])
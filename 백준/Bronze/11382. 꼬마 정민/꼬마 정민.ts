const [A, B, C] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number); console.log(A + B + C);
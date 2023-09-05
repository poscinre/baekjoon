const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin', 'utf-8').trim());

const numLongs = N / 4;
const dataType = 'long '.repeat(numLongs) + 'int';

console.log(dataType);

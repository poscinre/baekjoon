const raws = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.split(' ').map(item => Number(item)));

let max = 0;
let idx = [];

for(let k=0; k<9; k++) {
    for(let i=0; i<9; i++) {
        if(raws[k][i]>=max) {
            max = raws[k][i];
            idx=[k+1,i+1]
        }
    }
}
console.log(max)
console.log(idx.join(' '))
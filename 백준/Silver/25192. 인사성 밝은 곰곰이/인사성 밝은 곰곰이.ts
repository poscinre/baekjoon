const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let userDict = {};
let result = 0;
for(let i = 0 ; i < input.length ; i ++) {
    if(i === 0) continue;
    const curCommand = input[i];
    if(curCommand === 'ENTER') {
        userDict = {};
        continue;
    }
    if(curCommand in userDict) continue;
    userDict[curCommand] = 1;
    result++;
}

console.log(result);
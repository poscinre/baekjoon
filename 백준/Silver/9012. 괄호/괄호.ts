const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0]);

function isVPS(parenthesisString) {
    let stack = [];
    
    for (let i = 0; i < parenthesisString.length; i++) {
        if (parenthesisString[i] === '(') {
            stack.push(parenthesisString[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

for (let i = 1; i <= T; i++) {
    console.log(isVPS(input[i]) ? 'YES' : 'NO');
}
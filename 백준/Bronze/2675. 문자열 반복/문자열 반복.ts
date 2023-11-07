const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function repeatString(str, count) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i].repeat(count);
    }
    return result;
}

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const [R, S] = input[i].split(' ');
    const repeatedString = repeatString(S, parseInt(R));
    console.log(repeatedString);
}

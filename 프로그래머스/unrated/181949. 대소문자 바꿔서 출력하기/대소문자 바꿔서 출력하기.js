const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);

    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }

    console.log(result);
});

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = ["HelloWorld!"];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    const str = input[0];
    console.log(str);
});
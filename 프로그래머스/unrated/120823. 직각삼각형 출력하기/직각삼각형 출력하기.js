const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    const n = Number(input[0]);

    if (n < 1 || n > 10) {
        console.log("n은 1 이상 10 이하여야 합니다.");
        rl.close();
    } else {
        for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
                if (j <= i) {
                    row += '*';
                } else {
                    row += ' ';
                }
            }
            console.log(row);
        }
        rl.close();
    }
});
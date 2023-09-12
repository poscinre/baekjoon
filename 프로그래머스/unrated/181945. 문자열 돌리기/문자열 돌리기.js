const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    const str = input[0];

    function rotateString(str) {
        const lines = str.split('\n');
        const maxLength = Math.max(...lines.map(line => line.length));

        const rotatedLines = [];
        for (let i = 0; i < maxLength; i++) {
            let rotatedLine = '';
            for (let j = lines.length - 1; j >= 0; j--) {
                rotatedLine += lines[j][i] || ' ';
            }
            rotatedLines.push(rotatedLine);
        }

        return rotatedLines.join('\n');
    }

    const rotatedStr = rotateString(str);
    console.log(rotatedStr);
});

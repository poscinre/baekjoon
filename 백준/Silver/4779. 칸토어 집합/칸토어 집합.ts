const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);

function cantorSet(N) {
    let lines = "-".repeat(3 ** N);

    while (N > 0) {
        let newLines = "";
        for (let line of lines.split(" ")) {
            let segment = line.length / 3;
            newLines += line.slice(0, segment) + " ".repeat(segment) + line.slice(segment * 2) + " ";
        }
        lines = newLines.trim();
        N--;
    }

    return lines;
}

for (let n of input) {
    console.log(cantorSet(n));
}
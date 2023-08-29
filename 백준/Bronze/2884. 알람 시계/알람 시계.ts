const input: string = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
const [H, M]: number[] = input.split(' ').map(Number);

let newH: number = H;
let newM: number = M;

if (newM < 45) {
    if (newH === 0) {
        newH = 23;
        newM += 60;
    } else {
        newH -= 1;
        newM += 60;
    }
}

console.log(newH, newM - 45);
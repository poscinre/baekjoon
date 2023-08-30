const input: string = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
const lines: string[] = input.split('\n');

const [h, m]: number[] = lines[0].split(' ').map(Number);
const t: number = Number(lines[1]);

let newH: number = h + Math.floor(t / 60);
let newM: number = m + (t % 60);

if (newM >= 60) {
  newH += 1;
  newM -= 60;
}

if (newH >= 24) {
  newH -= 24;
}

console.log(newH, newM);
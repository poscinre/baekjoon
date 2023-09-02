const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
const N = parseInt(input);

if (N >= 1 && N <= 9) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
  }
} else {
  console.log("N은 1보다 크거나 같고, 9보다 작거나 같아야 합니다.");
}
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const [N, B] = input[0].split(' ').map(Number);

function decimalToBaseB(N, B) {
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  while (N > 0) {
    const remainder = N % B;
    result = digits[remainder] + result;
    N = Math.floor(N / B);
  }

  return result;
}

const answer = decimalToBaseB(N, B);
console.log(answer);

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const memo = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () =>
    Array.from({ length: 21 }, () => -1)
  )
);

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
  if (memo[a][b][c] !== -1) return memo[a][b][c];
  if (a < b && b < c) {
    memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return memo[a][b][c];
  } else {
    memo[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
    return memo[a][b][c];
  }
}

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  if (a === -1 && b === -1 && c === -1) break;
  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}
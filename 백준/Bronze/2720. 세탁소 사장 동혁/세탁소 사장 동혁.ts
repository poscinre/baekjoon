const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function calculateChange(cents) {
  const quarters = Math.floor(cents / 25);
  cents %= 25;
  const dimes = Math.floor(cents / 10);
  cents %= 10;
  const nickels = Math.floor(cents / 5);
  cents %= 5;
  const pennies = cents;

  return [quarters, dimes, nickels, pennies];
}

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const C = Number(input[i]);
  const [quarters, dimes, nickels, pennies] = calculateChange(C);
  console.log(`${quarters} ${dimes} ${nickels} ${pennies}`);
}

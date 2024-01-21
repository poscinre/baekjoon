function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(line => {
  const [a, b] = line.split(' ').map(Number);
  console.log(lcm(a, b));
});

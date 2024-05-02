const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function minimizeExpression(expression) {
  const parts = expression.split('-');
  let total = 0;
  for (let i = 0; i < parts.length; i++) {
    const sum = parts[i].split('+').reduce((acc, num) => acc + parseInt(num, 10), 0);
    if (i === 0) {
      total += sum;
    } else {
      total -= sum;
    }
  }
  return total;
}

console.log(minimizeExpression(input));
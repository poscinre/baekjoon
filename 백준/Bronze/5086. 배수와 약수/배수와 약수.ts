const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [num1, num2] = input[i].split(' ').map(Number);

  if (num2 % num1 === 0) {
    console.log('factor');
  } else if (num1 % num2 === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
}

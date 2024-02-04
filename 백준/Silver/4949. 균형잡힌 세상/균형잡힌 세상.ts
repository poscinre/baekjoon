function isBalanced(str) {
  let stack = [];

  for (let char of str) {
    if (char === '(' || char === '[') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.pop() !== '(') return false;
    } else if (char === ']') {
      if (stack.pop() !== '[') return false;
    }
  }

  return stack.length === 0;
}

require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').forEach((line) => {
  if (line === '.') return;
  console.log(isBalanced(line) ? 'yes' : 'no');
});
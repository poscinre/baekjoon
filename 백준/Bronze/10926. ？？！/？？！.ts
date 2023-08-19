import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // 입력으로 받은 아이디 뒤에 '??!'를 붙여서 출력
  const existingUsername = input;
  const surpriseExpression = `${existingUsername}??!`;
  console.log(surpriseExpression);

  rl.close();
});

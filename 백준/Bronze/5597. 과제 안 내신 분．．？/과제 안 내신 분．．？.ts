let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

let arr = Array(30)
  .fill(1)
  .map((a, b) => a + b);

let answer = [];

arr.forEach(x => {
  let student = input.indexOf(x);
  if (student === -1) {
    answer[answer.length] = x;
  }
});

console.log(Math.min(...answer));
console.log(Math.max(...answer));
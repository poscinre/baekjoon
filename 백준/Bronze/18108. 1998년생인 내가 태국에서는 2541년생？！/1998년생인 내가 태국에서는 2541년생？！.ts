const IMMORTALITY = 543;

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(parseInt(input) - IMMORTALITY);
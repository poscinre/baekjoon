const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();
console.log(Math.floor(Math.sqrt(input)));
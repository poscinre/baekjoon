const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function classifyTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid";
    } else if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

for (let i = 0; i < input.length - 1; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    if (a === 0 && b === 0 && c === 0) {
        break;
    }
    const result = classifyTriangle(a, b, c);
    console.log(result);
}
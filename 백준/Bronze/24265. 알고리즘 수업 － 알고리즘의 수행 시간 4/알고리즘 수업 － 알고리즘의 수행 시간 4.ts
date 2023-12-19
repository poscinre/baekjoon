const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);

function calculatePerformance(n) {
    const sum = n * (n - 1) / 2;
    const degree = 2;
    console.log(sum);
    console.log(degree);
}

calculatePerformance(n);
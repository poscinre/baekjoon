const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return Math.floor(sum / numbers.length);
}

function calculateMedian(numbers) {
    numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(numbers.length / 2);
    return numbers[middleIndex];
}

const average = calculateAverage(numbers);
const median = calculateMedian(numbers);

console.log(average);
console.log(median);

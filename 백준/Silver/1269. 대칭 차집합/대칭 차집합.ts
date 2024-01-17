const fs = require('fs');
const [sizes, aElements, bElements] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const setA = new Set(aElements.split(' ').map(Number));
const setB = new Set(bElements.split(' ').map(Number));

let symmetricDifferenceCount = 0;

setA.forEach(element => {
    if (!setB.has(element)) {
        symmetricDifferenceCount++;
    }
});

setB.forEach(element => {
    if (!setA.has(element)) {
        symmetricDifferenceCount++;
    }
});

console.log(symmetricDifferenceCount);
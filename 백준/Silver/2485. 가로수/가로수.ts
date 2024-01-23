const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const treeLocations = input.slice(1);
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function findMinimumTrees(locations) {
    let intervals = [];
    for (let i = 1; i < locations.length; i++) {
        intervals.push(locations[i] - locations[i - 1]);
    }

    let gcdValue = intervals[0];
    for (let interval of intervals) {
        gcdValue = gcd(gcdValue, interval);
    }

    let additionalTrees = 0;
    for (let interval of intervals) {
        additionalTrees += (interval / gcdValue) - 1;
    }

    return additionalTrees;
}

const result = findMinimumTrees(treeLocations);
console.log(result);
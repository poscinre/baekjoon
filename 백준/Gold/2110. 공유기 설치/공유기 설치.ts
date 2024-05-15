const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C] = input[0].split(' ').map(Number);
const houses = input.slice(1).map(Number).sort((a, b) => a - b);

function canPlaceRouters(minDist) {
  let count = 1;
  let lastInstalled = houses[0];

  for (let i = 1; i < N; i++) {
    if (houses[i] - lastInstalled >= minDist) {
      count++;
      lastInstalled = houses[i];
      if (count >= C) return true;
    }
  }
  return false;
}

let low = 1, high = houses[N-1] - houses[0], maxDist = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  if (canPlaceRouters(mid)) {
    maxDist = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(maxDist);

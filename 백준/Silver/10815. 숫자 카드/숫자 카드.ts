const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const cards = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const numbersToCheck = input[3].split(' ').map(Number);

cards.sort((a, b) => a - b);

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return 0;
}

const result = numbersToCheck.map(number => binarySearch(cards, number)).join(' ');
console.log(result);
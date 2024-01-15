const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const cards = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const numbersToCheck = input[3].split(' ').map(Number);

const countMap = new Map<number, number>();

cards.forEach(card => {
    countMap.set(card, (countMap.get(card) || 0) + 1);
});

const result = numbersToCheck.map(number => countMap.get(number) || 0).join(' ');

console.log(result);
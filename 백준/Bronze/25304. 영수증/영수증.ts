const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const X = parseInt(input[0]); // 영수증에 적힌 총 금액
const N = parseInt(input[1]); // 구매한 물건의 종류의 수

let calculatedTotal = 0; // 구매한 물건의 가격과 개수로 계산한 총 금액

for (let i = 2; i < 2 + N; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    calculatedTotal += a * b; // 각 물건의 가격과 개수를 곱하여 총 금액에 추가
}

if (calculatedTotal === X) {
    console.log('Yes');
} else {
    console.log('No');
}

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(row => row.split(' ').map(i => Number(i)));

function solution(input) {

    const zero = findZeroBoard();
    const n = zero.length;
    let answer = [];
    sudoku(0);

    function sudoku(count) {
        if (count === n) {
            for(var i = 0; i < 9; i++){
                for(var j = 0; j < 9; j++){
                    answer.push(input[i][j]);
                }
                console.log(answer.join(' '));
                answer = [];
            }
            process.exit(0);
        }

        let zeroX = zero[count][0];
        let zeroY = zero[count][1];

        for (let i = 1; i <= input.length; i++) {
            if (isPossible(zeroX, zeroY, i)) {
                input[zeroX][zeroY] = i;
                sudoku(count + 1);
                input[zeroX][zeroY] = 0;
            }
        }
    }

    function isPossible(x, y, value) {
        for (let i = 0; i < input.length; i++) {
            if (input[x][i] === value) return false;
        }
        for (let i = 0; i < input.length; i++) {
            if (input[i][y] === value) return false;
        }
        let threeX = Math.floor(x / 3) * 3;
        let threeY = Math.floor(y / 3) * 3;
        for (let i = threeX; i < threeX + 3; i++) {
            for (let j = threeY; j < threeY + 3; j++) {
                if (input[i][j] === value) return false;
            }
        }
        return true;
    }

    function findZeroBoard() {
        const zeros = [];
        for (let i = 0; i < input.length; i++) {
            for(let j = 0; j < input[0].length; j++) {
                if (input[i][j] === 0) zeros.push([i, j]);
            }
        }
        return zeros;
    }
    return input;
}

console.log(solution(input));
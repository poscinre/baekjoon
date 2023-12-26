function findConstructor(N) {
    for (let i = 1; i < N; i++) {
        let sum = i;
        let temp = i;

        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        if (sum === N) {
            return i;
        }
    }
    return 0;
}

const N = parseInt(require('fs').readFileSync('dev/stdin').toString().trim());
console.log(findConstructor(N));

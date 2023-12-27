function findTitleNumber(N) {
    let num = 666;
    let count = 1;

    while (count < N) {
        num++;
        if (num.toString().includes('666')) {
            count++;
        }
    }

    return num;
}

const N = parseInt(require('fs').readFileSync('dev/stdin').toString().trim());
console.log(findTitleNumber(N));

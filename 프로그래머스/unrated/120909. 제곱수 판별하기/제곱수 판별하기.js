function solution(n) {
    var sqrtN = Math.sqrt(n);

    if (Number.isInteger(sqrtN)) {
        return 1;
    } else {
        return 2;
    }
}

function solution(binomial) {
    const parts = binomial.split(' ');

    const a = parseInt(parts[0]);
    const op = parts[1];
    const b = parseInt(parts[2]);

    if (op === '+') {
        return a + b;
    } else if (op === '-') {
        return a - b;
    } else if (op === '*') {
        return a * b;
    }

    return 0;
}

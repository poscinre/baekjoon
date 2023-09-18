function solution(number) {
    const digits = number.split('').map(Number);

    const sum = digits.reduce((acc, curr) => acc + curr, 0);

    return sum % 9;
}
function solution(balls, share) {
    let answer = 0;

    const combination = (n, r) => {
        if (r === 0 || n === r) {
            return 1;
        } else {
            return combination(n - 1, r - 1) + combination(n - 1, r);
        }
    };

    answer = combination(balls, share);
    return answer;
}

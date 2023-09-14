function solution(ineq, eq, n, m) {
    if ((ineq === '<' && eq === '=') && n <= m) {
        return 1;
    } else if ((ineq === '<' && eq === '!') && n < m) {
        return 1;
    } else if ((ineq === '>' && eq === '=') && n >= m) {
        return 1;
    } else if ((ineq === '>' && eq === '!') && n > m) {
        return 1;
    } else {
        return 0;
    }
}
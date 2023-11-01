function solution(a, b) {
    function gcd(x, y) {
        if (y === 0) return x;
        return gcd(y, x % y);
    }

    function isFiniteDecimal(num) {
        while (num % 2 === 0) num /= 2;
        while (num % 5 === 0) num /= 5;
        return num === 1;
    }

    const GCD = gcd(a, b);
    const denominator = b / GCD;
    return isFiniteDecimal(denominator) ? 1 : 2;
}

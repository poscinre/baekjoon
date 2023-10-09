function solution(numer1, denom1, numer2, denom2) {
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    const newNumer = numer1 * denom2 + numer2 * denom1;
    const newDenom = denom1 * denom2;

    const gcdValue = gcd(newNumer, newDenom);

    const reducedNumer = newNumer / gcdValue;
    const reducedDenom = newDenom / gcdValue;

    return [reducedNumer, reducedDenom];
}
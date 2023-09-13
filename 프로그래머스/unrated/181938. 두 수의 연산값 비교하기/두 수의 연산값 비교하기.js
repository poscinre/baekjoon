function solution(a, b) {
    var resultA = Number(a.toString() + b.toString());
    var resultB = 2 * a * b;

    if (resultA >= resultB) {
        return resultA;
    } else {
        return resultB;
    }
}
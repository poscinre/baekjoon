function solution(sides) {
    sides.sort((a, b) => a - b);
    const longestSide = sides[2];
    const sumOfOtherSides = sides[0] + sides[1];
    if (longestSide < sumOfOtherSides) {
        return 1;
    } else {
        return 2;
    }
}
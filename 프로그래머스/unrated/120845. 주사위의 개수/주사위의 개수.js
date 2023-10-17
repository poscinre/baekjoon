function solution(box, n) {
    const minSize = Math.min(...box);
    const maxDicePerSide = Math.floor(minSize / n);
    const maxDiceCount = maxDicePerSide ** 3;
    return maxDiceCount;
}
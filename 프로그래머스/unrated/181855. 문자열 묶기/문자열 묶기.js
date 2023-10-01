function solution(strArr) {
    const groups = {};

    for (const str of strArr) {
        const length = str.length;
        if (!groups[length]) {
            groups[length] = 1;
        } else {
            groups[length]++;
        }
    }

    let maxGroupSize = 0;
    for (const size in groups) {
        if (groups[size] > maxGroupSize) {
            maxGroupSize = groups[size];
        }
    }
    return maxGroupSize;
}
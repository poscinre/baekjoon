function solution(numLog) {
    let currentNum = numLog[0];
    let inputString = '';

    for (let i = 1; i < numLog.length; i++) {
        const diff = numLog[i] - numLog[i - 1];

        if (diff === 1) {
            inputString += 'w';
        } else if (diff === -1) {
            inputString += 's';
        } else if (diff === 10) {
            inputString += 'd';
        } else if (diff === -10) {
            inputString += 'a';
        }
    }

    return inputString;
}
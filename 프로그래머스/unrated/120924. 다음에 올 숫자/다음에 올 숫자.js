function solution(common) {
    const length = common.length;
    
    const isArithmetic = common[length - 1] - common[length - 2] === common[1] - common[0];
    
    if (isArithmetic) {
        const commonDifference = common[1] - common[0];
        return common[length - 1] + commonDifference;
    } else {
        const commonRatio = common[1] / common[0];
        return common[length - 1] * commonRatio;
    }
}
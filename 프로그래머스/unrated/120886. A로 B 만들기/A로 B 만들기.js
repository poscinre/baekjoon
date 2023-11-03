function solution(before, after) {
    if (before.length !== after.length) {
        return 0;
    }
    
    const charCount = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < before.length; i++) {
        charCount[before.charCodeAt(i) - aCharCode]++;
        charCount[after.charCodeAt(i) - aCharCode]--;
    }
    
    for (const count of charCount) {
        if (count !== 0) {
            return 0;
        }
    }
    
    return 1;
}
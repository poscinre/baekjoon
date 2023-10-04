function solution(str1, str2) {
    for (let i = 0; i <= str2.length - str1.length; i++) {
        const substring = str2.substring(i, i + str1.length);
        
        if (substring === str1) {
            return 1;
        }
    }
    return 0;
}
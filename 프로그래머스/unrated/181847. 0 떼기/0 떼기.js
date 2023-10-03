function solution(n_str) {
    var len = n_str.length;
    
    var startIndex = 0;
    while (startIndex < len && n_str[startIndex] === '0') {
        startIndex++;
    }
    
    return n_str.substring(startIndex);
}
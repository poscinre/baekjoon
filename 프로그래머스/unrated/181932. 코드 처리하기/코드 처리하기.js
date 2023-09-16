function solution(code) {
    var answer = '';
    var mode = 0;
    
    for (var idx = 0; idx < code.length; idx++) {
        if (mode === 0) {
            if (code[idx] !== "1") {
                if (idx % 2 === 0) {
                    answer += code[idx];
                }
            } else {
                mode = 1;
            }
        } else {
            if (code[idx] !== "1") {
                if (idx % 2 !== 0) {
                    answer += code[idx];
                }
            } else {
                mode = 0;
            }
        }
    }
    
    return answer === '' ? "EMPTY" : answer;
}

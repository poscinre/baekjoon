function solution(i, j, k) {
    var answer = 0;
    for (var num = i; num <= j; num++) {
        var strNum = num.toString();
        for (var char of strNum) {
            if (parseInt(char) === k) {
                answer++;
            }
        }
    }
    return answer;
}
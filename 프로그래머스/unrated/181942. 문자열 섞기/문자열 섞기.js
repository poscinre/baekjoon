function solution(str1, str2) {
    var answer = '';
    var n = str1.length;

    for (var i = 0; i < n; i++) {
        answer += str1[i] + str2[i];
    }

    return answer;
}

function solution(intStrs, k, s, l) {
    var answer = [];

    for (var i = 0; i < intStrs.length; i++) {
        var str = intStrs[i];
        var subStr = str.substring(s, s + l);
        var num = parseInt(subStr);

        if (num > k) {
            answer.push(num);
        }
    }

    return answer;
}

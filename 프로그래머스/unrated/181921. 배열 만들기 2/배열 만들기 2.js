function solution(l, r) {
    var answer = [];

    for (var i = l; i <= r; i++) {
        var numStr = i.toString();
        var isZeroFiveOnly = true;

        for (var j = 0; j < numStr.length; j++) {
            if (numStr[j] !== '0' && numStr[j] !== '5') {
                isZeroFiveOnly = false;
                break;
            }
        }

        if (isZeroFiveOnly) {
            answer.push(i);
        }
    }

    if (answer.length === 0) {
        return [-1];
    }

    return answer;
}
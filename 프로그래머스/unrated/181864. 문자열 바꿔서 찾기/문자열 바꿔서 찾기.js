function solution(myString, pat) {
    var answer = 0;
    var transformedString = myString.replace(/A/g, 'X').replace(/B/g, 'A').replace(/X/g, 'B');

    for (var i = 0; i <= transformedString.length - pat.length; i++) {
        if (transformedString.slice(i, i + pat.length) === pat) {
            answer = 1;
            break;
        }
    }

    return answer;
}

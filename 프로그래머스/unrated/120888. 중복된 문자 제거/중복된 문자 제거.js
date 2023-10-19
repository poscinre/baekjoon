function solution(my_string) {
    var answer = '';
    var seen = new Set();

    for (var i = 0; i < my_string.length; i++) {
        var currentChar = my_string[i];
        if (!seen.has(currentChar)) {
            answer += currentChar;
            seen.add(currentChar);
        }
    }

    return answer;
}

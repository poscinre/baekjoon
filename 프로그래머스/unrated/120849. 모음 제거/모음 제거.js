function solution(my_string) {
    var answer = '';
    var vowels = "aeiou";

    for (var i = 0; i < my_string.length; i++) {
        var currentChar = my_string[i];

        if (vowels.indexOf(currentChar) === -1) {
            answer += currentChar;
        }
    }

    return answer;
}
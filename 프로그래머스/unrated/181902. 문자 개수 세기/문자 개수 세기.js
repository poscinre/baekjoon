function solution(my_string) {
    var answer = new Array(52).fill(0);

    for (var i = 0; i < my_string.length; i++) {
        var char = my_string.charAt(i);

        if (char >= 'A' && char <= 'Z') {
            var index = char.charCodeAt(0) - 'A'.charCodeAt(0);
            answer[index]++;
        }
        else if (char >= 'a' && char <= 'z') {
            var index = char.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
            answer[index]++;
        }
    }

    return answer;
}
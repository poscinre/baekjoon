function solution(my_str, n) {
    var answer = [];

    for (var i = 0; i < my_str.length; i += n) {
        var chunk = my_str.slice(i, i + n);
        answer.push(chunk);
    }

    return answer;
}
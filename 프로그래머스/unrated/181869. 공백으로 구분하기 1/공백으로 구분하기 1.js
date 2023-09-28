function solution(my_string) {
    var words = my_string.split(' ');

    var answer = [];

    for (var i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            answer.push(words[i]);
        }
    }
    return answer;
}
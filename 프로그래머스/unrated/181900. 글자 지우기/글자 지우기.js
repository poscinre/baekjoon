function solution(my_string, indices) {
    var answer = '';

    var stringArray = my_string.split('');

    for (var i = 0; i < my_string.length; i++) {
        if (!indices.includes(i)) {
            answer += stringArray[i];
        }
    }

    return answer;
}
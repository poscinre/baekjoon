function solution(myString) {
    var answer = [];
    var substrings = myString.split('x');

    for (var i = 0; i < substrings.length; i++) {
        answer.push(substrings[i].length);
    }

    return answer;
}
function solution(age) {
    var answer = '';
    var alphabet = 'abcdefghij';
    while (age > 0) {
        var remainder = age % 10;
        answer = alphabet[remainder] + answer;
        age = Math.floor(age / 10);
    }
    return answer;
}
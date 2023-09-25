function solution(arr) {
    var answer = [];
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (num >= 50 && num % 2 === 0) {
            answer.push(num / 2);
        } else if (num < 50 && num % 2 !== 0) {
            answer.push(num * 2);
        } else {
            answer.push(num);
        }
    }
    return answer;
}
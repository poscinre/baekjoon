function solution(arr) {
    var length = arr.length;

    var targetLength = 1;
    while (targetLength < length) {
        targetLength *= 2;
    }

    var numberOfZeros = targetLength - length;

    var answer = arr.slice();
    for (var i = 0; i < numberOfZeros; i++) {
        answer.push(0);
    }

    return answer;
}
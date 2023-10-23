function solution(array) {
    var answer = [];
    var maxNumber = -1;
    var maxIndex = -1;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
            maxIndex = i;
        }
    }

    answer.push(maxNumber);
    answer.push(maxIndex);

    return answer;
}
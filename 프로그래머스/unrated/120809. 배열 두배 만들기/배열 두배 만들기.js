function solution(numbers) {
    var answer = [];
    
    for (var i = 0; i < numbers.length; i++) {
        var doubledValue = numbers[i] * 2;
        answer.push(doubledValue);
    }
    
    return answer;
}

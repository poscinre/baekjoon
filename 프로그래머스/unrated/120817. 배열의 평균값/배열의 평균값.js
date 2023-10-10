function solution(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    var average = sum / numbers.length;
    return average;
}
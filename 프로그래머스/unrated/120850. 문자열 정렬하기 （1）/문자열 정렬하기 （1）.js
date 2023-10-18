function solution(my_string) {
    var numbers = my_string.match(/\d/g);
    if (numbers) {
        numbers = numbers.map(Number);
        numbers.sort(function(a, b) { return a - b; });
    }
    return numbers || [];
}
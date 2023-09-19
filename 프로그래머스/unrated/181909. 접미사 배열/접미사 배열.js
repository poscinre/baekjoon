function solution(my_string) {
    var answer = [];
    
    var length = my_string.length;
    
    for (var i = 0; i < length; i++) {
        answer.push(my_string.slice(i));
    }
    
    answer.sort();
    
    return answer;
}
function solution(num_str) {
    var answer = 0;
    
    for (var i = 0; i < num_str.length; i++) {
        var digit = parseInt(num_str.charAt(i));
        
        answer += digit;
    }
    
    return answer;
}

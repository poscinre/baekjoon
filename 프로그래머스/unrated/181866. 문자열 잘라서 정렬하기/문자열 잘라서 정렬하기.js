function solution(myString) {
    var answer = [];
    
    var parts = myString.split("x");
    
    for (var i = 0; i < parts.length; i++) {
        if (parts[i] !== "") {
            answer.push(parts[i]);
        }
    }
    
    answer.sort();
    
    return answer;
}

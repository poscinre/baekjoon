function solution(arr) {
    var answer = [];
    
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        
        for (var j = 0; j < num; j++) {
            answer.push(num);
        }
    }
    
    return answer;
}

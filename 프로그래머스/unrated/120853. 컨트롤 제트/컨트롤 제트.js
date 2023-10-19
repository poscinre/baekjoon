function solution(s) {
    var elements = s.split(" ");
    var stack = [];
    var answer = 0;
    
    for (var i = 0; i < elements.length; i++) {
        if (elements[i] === "Z") {
            var removed = stack.pop();
            answer -= removed;
        } else {
            var num = parseInt(elements[i]);
            stack.push(num);
            answer += num;
        }
    }
    
    return answer;
}
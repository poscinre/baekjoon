function solution(my_strings, parts) {
    var answer = '';
    
    for (let i = 0; i < my_strings.length; i++) {
        let currentString = my_strings[i];
        let [start, end] = parts[i];
        
        let part = currentString.substring(start, end + 1);
        answer += part;
    }
    
    return answer;
}
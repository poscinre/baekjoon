function solution(my_string, index_list) {
    var answer = '';
    
    for (var i = 0; i < index_list.length; i++) {
        var index = index_list[i];
        
        if (index >= 0 && index < my_string.length) {
            answer += my_string[index];
        }
    }
    
    return answer;
}

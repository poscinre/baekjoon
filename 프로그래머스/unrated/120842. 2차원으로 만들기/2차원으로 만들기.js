function solution(num_list, n) {
    var result = [];
    
    for (var i = 0; i < num_list.length; i += n) {
        result.push(num_list.slice(i, i + n));
    }
    
    return result;
}
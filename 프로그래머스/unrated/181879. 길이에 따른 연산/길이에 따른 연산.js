function solution(num_list) {
    var length = num_list.length;
    
    if (length >= 11) {
        var sum = 0;
        for (var i = 0; i < length; i++) {
            sum += num_list[i];
        }
        return sum;
    }
    
    else {
        var product = 1;
        for (var i = 0; i < length; i++) {
            product *= num_list[i];
        }
        return product;
    }
}
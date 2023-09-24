function solution(num_list) {
    var oddSum = 0;
    var evenSum = 0;
    
    for (var i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            evenSum += num_list[i];
        } else {
            oddSum += num_list[i];
        }
    }
    
    if (oddSum >= evenSum) {
        return oddSum;
    } else {
        return evenSum;
    }
}
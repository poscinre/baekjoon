function solution(num_list) {
    var evenSum = 0;
    var oddSum = 0;

    for (var i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenSum = evenSum * 10 + num_list[i];
        } else {
            oddSum = oddSum * 10 + num_list[i];
        }
    }

    return evenSum + oddSum;
}
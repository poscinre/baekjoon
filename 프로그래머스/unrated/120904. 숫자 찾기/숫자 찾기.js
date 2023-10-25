function solution(num, k) {
    var numString = num.toString();
    for (var i = 0; i < numString.length; i++) {
        if (parseInt(numString[i]) === k) {
            return i + 1;
        }
    }
    return -1;
}

function solution(n) {
    var strN = n.toString();
    var sum = 0;
    for (var i = 0; i < strN.length; i++) {
        sum += parseInt(strN[i], 10);
    }
    return sum;
}
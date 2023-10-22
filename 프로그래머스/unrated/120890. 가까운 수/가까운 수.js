function solution(array, n) {
    var closest = array[0];
    var minDiff = Math.abs(closest - n);

    for (var i = 1; i < array.length; i++) {
        var diff = Math.abs(array[i] - n);
        
        if (diff < minDiff || (diff === minDiff && array[i] < closest)) {
            closest = array[i];
            minDiff = diff;
        }
    }

    return closest;
}
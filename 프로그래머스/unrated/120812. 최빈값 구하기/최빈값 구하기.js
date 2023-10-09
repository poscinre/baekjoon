function solution(array) {
    var counts = {};

    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        if (counts[num] === undefined) {
            counts[num] = 1;
        } else {
            counts[num]++;
        }
    }

    var maxCount = 0;
    var mode = -1;

    for (var key in counts) {
        if (counts[key] > maxCount) {
            maxCount = counts[key];
            mode = key;
        } else if (counts[key] === maxCount) {
            mode = -1;
        }
    }

    return parseInt(mode);
}
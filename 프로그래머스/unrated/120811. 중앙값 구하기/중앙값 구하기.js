function solution(array) {
    array.sort(function(a, b) {
        return a - b;
    });

    var middleIndex = Math.floor(array.length / 2);

    return array[middleIndex];
}
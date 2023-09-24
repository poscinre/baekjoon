function solution(arr, queries) {
    var answer = [];

    for (var i = 0; i < queries.length; i++) {
        var query = queries[i];
        var s = query[0];
        var e = query[1];

        for (var j = s; j <= e; j++) {
            arr[j] += 1;
        }
    }

    return arr;
}
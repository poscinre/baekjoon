function solution(arr, queries) {
    var answer = [];

    for (var i = 0; i < queries.length; i++) {
        var query = queries[i];
        var s = query[0];
        var e = query[1];
        var k = query[2];

        var validIndexes = [];

        for (var j = s; j <= e; j++) {
            if (arr[j] > k) {
                validIndexes.push(j);
            }
        }

        if (validIndexes.length === 0) {
            answer.push(-1);
        } else {
            var minVal = arr[validIndexes[0]];
            for (var j = 1; j < validIndexes.length; j++) {
                if (arr[validIndexes[j]] < minVal) {
                    minVal = arr[validIndexes[j]];
                }
            }
            answer.push(minVal);
        }
    }

    return answer;
}

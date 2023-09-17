function solution(arr, queries) {
    var answer = [...arr];

    for (var i = 0; i < queries.length; i++) {
        var query = queries[i];
        var index1 = query[0];
        var index2 = query[1];

        var temp = answer[index1];
        answer[index1] = answer[index2];
        answer[index2] = temp;
    }

    return answer;
}
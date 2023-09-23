function solution(arr, intervals) {
    var answer = [];

    var firstInterval = intervals[0];
    var firstSubArray = arr.slice(firstInterval[0], firstInterval[1] + 1);
    answer = answer.concat(firstSubArray);

    var secondInterval = intervals[1];
    var secondSubArray = arr.slice(secondInterval[0], secondInterval[1] + 1);
    answer = answer.concat(secondSubArray);

    return answer;
}
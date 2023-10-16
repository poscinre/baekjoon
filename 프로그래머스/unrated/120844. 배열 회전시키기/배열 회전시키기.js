function solution(numbers, direction) {
    var answer = [...numbers];

    if (direction === "left") {
        const firstElement = answer.shift();
        answer.push(firstElement);
    } else if (direction === "right") {
        const lastElement = answer.pop();
        answer.unshift(lastElement);
    }

    return answer;
}
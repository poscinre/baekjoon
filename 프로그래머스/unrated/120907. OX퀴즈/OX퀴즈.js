function solution(quiz) {
    var answer = [];

    for (var i = 0; i < quiz.length; i++) {
        var equation = quiz[i].split(" ");
        var X = parseInt(equation[0]);
        var operator = equation[1];
        var Y = parseInt(equation[2]);
        var Z = parseInt(equation[4]);

        var result;

        if (operator === "+") {
            result = X + Y;
        } else if (operator === "-") {
            result = X - Y;
        }

        if (result === Z) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    }

    return answer;
}
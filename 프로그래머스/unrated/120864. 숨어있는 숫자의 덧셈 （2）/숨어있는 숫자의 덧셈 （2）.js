function solution(my_string) {
    var answer = 0;
    var currentNumber = 0;
    var isNumber = false;

    for (var i = 0; i < my_string.length; i++) {
        var char = my_string.charAt(i);

        if (/[0-9]/.test(char)) {
            currentNumber = currentNumber * 10 + parseInt(char);
            isNumber = true;
        } else {
            if (isNumber) {
                answer += currentNumber;
                currentNumber = 0;
                isNumber = false;
            }
        }
    }

    if (isNumber) {
        answer += currentNumber;
    }

    return answer;
}
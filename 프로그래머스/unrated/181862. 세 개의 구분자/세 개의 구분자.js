function solution(myStr) {
    var answer = [];
    var currentSubstring = "";

    for (var i = 0; i < myStr.length; i++) {
        if (myStr[i] === "a" || myStr[i] === "b" || myStr[i] === "c") {
            if (currentSubstring !== "") {
                answer.push(currentSubstring);
            }
            currentSubstring = "";
        } else {
            currentSubstring += myStr[i];
        }
    }

    if (currentSubstring !== "") {
        answer.push(currentSubstring);
    }

    if (answer.length === 0) {
        answer.push("EMPTY");
    }

    return answer;
}
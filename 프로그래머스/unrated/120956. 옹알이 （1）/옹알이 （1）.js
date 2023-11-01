function solution(babbling) {
    var answer = 0;
    
    const patterns = ["aya", "ye", "woo", "ma"];

    for (const word of babbling) {
        let isValid = true;
        let tempWord = word;

        for (const pattern of patterns) {
            const index = tempWord.indexOf(pattern);

            if (index !== -1) {
                tempWord = tempWord.replace(pattern, " ");
            }
        }

        if (tempWord.replace(/ /g, "").length > 0) {
            isValid = false;
        }

        if (isValid) {
            answer += 1;
        }
    }

    return answer;
}
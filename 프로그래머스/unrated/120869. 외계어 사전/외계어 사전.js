function solution(spell, dic) {
    var answer = 0;
    
    function generateCombinations(current, remaining) {
        if (remaining.length === 0) {
            const word = current.join("");
            if (dic.includes(word)) {
                answer = 1;
            }
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const nextLetter = remaining[i];
                const newCurrent = current.slice();
                newCurrent.push(nextLetter);
                const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                generateCombinations(newCurrent, newRemaining);
            }
        }
    }
    
    generateCombinations([], spell);

    return answer === 1 ? 1 : 2;
}
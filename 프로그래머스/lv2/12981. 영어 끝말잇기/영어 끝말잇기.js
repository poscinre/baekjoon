function solution(n, words) {
    var answer = [0, 0];
    var usedWords = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (usedWords.includes(word) || (i > 0 && word[0] !== words[i - 1][words[i - 1].length - 1])) {
            answer = [(i % n) + 1, Math.floor(i / n) + 1];
            break;
        } else {
            usedWords.push(word);
        }
    }

    return answer;
}
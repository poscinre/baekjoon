function solution(s) {
    var charCount = {};

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    var uniqueChars = [];

    for (var char in charCount) {
        if (charCount[char] === 1) {
            uniqueChars.push(char);
        }
    }

    uniqueChars.sort();

    var answer = uniqueChars.join('');

    return answer;
}

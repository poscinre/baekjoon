function solution(score) {
    var answer = new Array(score.length).fill(1);
    
    var averageScores = score.map(s => (s[0] + s[1]) / 2);
    
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if (averageScores[i] < averageScores[j]) {
                answer[i]++;
            }
        }
    }
    
    return answer;
}
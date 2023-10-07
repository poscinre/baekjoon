function solution(n, s) {
    if (n === 1) {
        return [s];
    } else if (n > s) {
        return [-1];
    } else {
        const quotient = Math.floor(s / n);
        const remainder = s % n;
        const answer = Array(n).fill(quotient);
        
        for (let i = n - 1; i >= n - remainder; i--) {
            answer[i]++;
        }
        
        return answer;
    }
}
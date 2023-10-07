function solution(n) {
    const answer = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let num = 1;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;

    while (num <= n * n) {
        for (let i = left; i <= right; i++) {
            answer[top][i] = num++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            answer[i][right] = num++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            answer[bottom][i] = num++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            answer[i][left] = num++;
        }
        left++;
    }

    return answer;
}
function solution(n) {
    var answer = 0;
    var isComposite = new Array(n+1).fill(false);

    for (var i = 2; i <= n; i++) {
        if (!isComposite[i]) {
            for (var j = 2; i*j <= n; j++) {
                isComposite[i*j] = true;
            }
        }
    }

    for (var i = 4; i <= n; i++) {
        if (isComposite[i]) {
            answer++;
        }
    }

    return answer;
}
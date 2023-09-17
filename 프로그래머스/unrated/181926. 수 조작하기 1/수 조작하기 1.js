function solution(n, control) {
    for (let i = 0; i < control.length; i++) {
        const command = control[i];
        if (command === 'w') {
            n += 1;
        } else if (command === 's') {
            n -= 1;
        } else if (command === 'd') {
            n += 10;
        } else if (command === 'a') {
            n -= 10;
        }
    }
    return n;
}
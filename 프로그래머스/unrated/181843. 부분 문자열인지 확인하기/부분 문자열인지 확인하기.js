function solution(my_string, target) {
    const myStringLength = my_string.length;
    const targetLength = target.length;

    for (let i = 0; i <= myStringLength - targetLength; i++) {
        const substring = my_string.substr(i, targetLength);
        if (substring === target) {
            return 1;
        }
    }

    return 0;
}

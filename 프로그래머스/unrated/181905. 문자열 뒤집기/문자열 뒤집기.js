function solution(my_string, s, e) {
    const charArray = my_string.split('');
    const reversedSubstr = charArray.slice(s, e + 1).reverse();
    
    for (let i = s; i <= e; i++) {
        charArray[i] = reversedSubstr[i - s];
    }
    return charArray.join('');
}
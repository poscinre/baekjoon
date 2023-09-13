function solution(a, b) {
    const result1 = (a + "" + b);
    const result2 = (b + "" + a);
    
    if (result1 > result2) {
        return parseInt(result1); 
    } else {
        return parseInt(result2);
    }
}

function solution(myString, pat) {
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    
    var answer = 0;
    
    for (var i = 0; i <= myString.length - pat.length; i++) {
        var substring = myString.substring(i, i + pat.length);
        
        if (substring === pat) {
            answer = 1;
            break;
        }
    }
    
    return answer;
}
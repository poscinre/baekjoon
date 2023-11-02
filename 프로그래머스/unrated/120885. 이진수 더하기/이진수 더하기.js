function solution(bin1, bin2) {
    let answer = '';
    let carry = 0;
    let len1 = bin1.length;
    let len2 = bin2.length;
    
    while(len1 < len2) {
        bin1 = '0' + bin1;
        len1++;
    }
    while(len2 < len1) {
        bin2 = '0' + bin2;
        len2++;
    }

    for(let i = len1 - 1; i >= 0; i--) {
        let sum = parseInt(bin1[i]) + parseInt(bin2[i]) + carry;
        if(sum >= 2) {
            answer = (sum % 2) + answer;
            carry = 1;
        } else {
            answer = sum + answer;
            carry = 0;
        }
    }
    
    if(carry > 0) {
        answer = '1' + answer;
    }
    
    return answer;
}

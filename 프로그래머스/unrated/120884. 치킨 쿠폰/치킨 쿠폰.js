function solution(chicken) {
    var answer = 0;
    
    var receivedChicken = chicken;
    var coupon = chicken;
    
    while (coupon >= 10) {
        var serviceChicken = Math.floor(coupon / 10);
        answer += serviceChicken;
        receivedChicken += serviceChicken;
        coupon = coupon % 10 + serviceChicken;
    }
    
    return answer;
}

function solution(money) {
    var answer = [];
    var coffeePrice = 5500;
    var maxCoffeeCount = Math.floor(money / coffeePrice);
    var remainingMoney = money % coffeePrice;
    answer.push(maxCoffeeCount, remainingMoney);
    return answer;
}
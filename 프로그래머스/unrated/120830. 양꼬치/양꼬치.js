function solution(n, k) {
    const yakitoriPrice = 12000;
    const drinkPrice = 2000;
    const freeDrinks = Math.floor(n / 10);
    const totalYakitoriCost = n * yakitoriPrice;
    const totalDrinkCost = (k - freeDrinks) * drinkPrice;
    const totalCost = totalYakitoriCost + totalDrinkCost;

    return totalCost;
}
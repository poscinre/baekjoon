function solution(order) {
    let money = 0;

    order.forEach(item => {
        if (item.includes("anything") || item.includes("americano")) {
            money += 4500;
        } else {
            money += 5000;
        }
    });

    return money;
}
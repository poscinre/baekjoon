function solution(slice, n) {
    var slicesPerPizza = slice;

    var minPizzas = Math.ceil(n / slicesPerPizza);

    return minPizzas;
}
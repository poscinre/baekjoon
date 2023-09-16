function solution(num_list) {
    const product = num_list.reduce((acc, curr) => acc * curr, 1);
    const sum = num_list.reduce((acc, curr) => acc + curr, 0) ** 2;

    if (product < sum) {
        return 1;
    } else {
        return 0;
    }
}

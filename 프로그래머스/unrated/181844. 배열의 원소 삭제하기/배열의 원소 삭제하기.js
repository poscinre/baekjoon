function solution(arr, delete_list) {
    const deleteSet = new Set(delete_list);

    const answer = [];

    for (const element of arr) {
        if (!deleteSet.has(element)) {
            answer.push(element);
        }
    }

    return answer;
}
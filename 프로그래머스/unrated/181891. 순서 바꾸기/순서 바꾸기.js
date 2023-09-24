function solution(num_list, n) {
    const part1 = num_list.slice(n);
    const part2 = num_list.slice(0, n);
    
    const answer = part1.concat(part2);
    
    return answer;
}

function solution(n, edges) {
    const graph = new Array(n + 1).fill([]).map(() => []);
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const visited = new Array(n + 1).fill(false);
    const distances = new Array(n + 1).fill(0);
    
    const queue = [1];
    visited[1] = true;
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distances[neighbor] = distances[node] + 1;
                queue.push(neighbor);
            }
        }
    }
    
    const maxDistance = Math.max(...distances);
    
    return distances.filter(distance => distance === maxDistance).length;
}

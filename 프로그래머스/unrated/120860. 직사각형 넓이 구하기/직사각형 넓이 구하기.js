function solution(dots) {
    const xCoordinates = dots.map(dot => dot[0]);
    const yCoordinates = dots.map(dot => dot[1]);
    
    const width = Math.max(...xCoordinates) - Math.min(...xCoordinates);
    const height = Math.max(...yCoordinates) - Math.min(...yCoordinates);
    
    const area = width * height;
    
    return area;
}
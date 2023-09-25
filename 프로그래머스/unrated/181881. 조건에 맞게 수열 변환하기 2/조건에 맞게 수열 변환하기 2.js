function solution(arr) {
    const n = arr.length;
    let newArr = Array(n).fill(0);
    
    let x = 0;
    while (true) {
        for (let i = 0; i < n; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) {
                newArr[i] = arr[i] / 2;
            } else if (arr[i] < 50 && arr[i] % 2 === 1) {
                newArr[i] = arr[i] * 2 + 1;
            } else {
                newArr[i] = arr[i];
            }
        }
        
        if (arr.join() === newArr.join()) {
            return x;
        }
        
        arr = [...newArr];
        x++;
    }
}
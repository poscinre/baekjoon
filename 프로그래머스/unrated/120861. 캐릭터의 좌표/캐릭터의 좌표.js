function solution(keyinput, board) {
    const numRows = board[1];
    const numCols = board[0];
    let x = 0;
    let y = 0;

    for (const direction of keyinput) {
        if (direction === "up" && y < (numRows - 1) / 2) {
            y++;
        } else if (direction === "down" && y > -(numRows - 1) / 2) {
            y--;
        } else if (direction === "left" && x > -(numCols - 1) / 2) {
            x--;
        } else if (direction === "right" && x < (numCols - 1) / 2) {
            x++;
        }
    }

    return [x, y];
}
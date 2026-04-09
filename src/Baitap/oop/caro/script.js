const SIZE = 20;
const CELL_SIZE = 20;

let board = [];
let currentPlayer = "X";
let gameOver = false;

for (let i = 0; i < SIZE; i++) {
    board[i] = [];
    for (let j = 0; j < SIZE; j++) {
        board[i][j] = "";
    }
}

const boardDiv = document.getElementById("board");

for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
        let cell = document.createElement("div");
        cell.className = "cell";

        cell.style.top = row * CELL_SIZE + "px";
        cell.style.left = col * CELL_SIZE + "px";

        cell.dataset.row = row;
        cell.dataset.col = col;

        cell.addEventListener("click", handleClick);

        boardDiv.appendChild(cell);
    }
}

function handleClick(e) {
    if (gameOver) return;

    let row = parseInt(e.target.dataset.row);
    let col = parseInt(e.target.dataset.col);

    if (board[row][col] !== "") return;

    board[row][col] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (checkWin(row, col)) {
        document.getElementById("status").innerText = currentPlayer + " thắng!";

        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").innerText = "Turn: " + currentPlayer;
}

function checkWin(row, col) {
    row = parseInt(row);
    col = parseInt(col);

    return (
        checkDirection(row, col, 1, 0) ||
        checkDirection(row, col, 0, 1) ||
        checkDirection(row, col, 1, 1) ||
        checkDirection(row, col, 1, -1)
    );
}

function checkDirection(row, col, dx, dy) {
    let count = 1;

    let i = row + dx;
    let j = col + dy;

    while (
        i >= 0 && i < SIZE &&
        j >= 0 && j < SIZE &&
        board[i][j] === currentPlayer
        ) {
        count++;
        i += dx;
        j += dy;
    }

    i = row - dx;
    j = col - dy;

    while (
        i >= 0 && i < SIZE &&
        j >= 0 && j < SIZE &&
        board[i][j] === currentPlayer
        ) {
        count++;
        i -= dx;
        j -= dy;
    }

    return count >= 5;
}
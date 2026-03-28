let showGame = document.getElementById("carogame");

let board = [];
let data = "";
let currentPlayer = "X";

for (let i = 0; i < 5; i++) {
    board[i] = [".", ".", ".", ".", "."];
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

displayBoard();

function displayBoard() {
    let data = "";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
    showGame.innerHTML = data;
}

function changeValue() {
    let x = prompt("Nhập vị trí x: ");
    let y = prompt("Nhập vị trí y: ");

    if (board[x][y] === ".") {
        board[x][y] = currentPlayer;

        if (checkWin(x, y)) {
            alert("Người chơi " + currentPlayer + " thắng");
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
        alert("Ô đã được chọn!");
    }

    displayBoard();
}

function checkWin(x, y) {
    x = Number(x);
    y = Number(y);

    let count = 0;

    for (let j = 0; j < 5; j++) {
        if (board[x][j] === currentPlayer) count++;
        else count = 0;
        if (count === 3) return true;
    }

    count = 0;
    for (let i = 0; i < 5; i++) {
        if (board[i][y] === currentPlayer) count++;
        else count = 0;
        if (count === 3) return true;
    }

    count = 0;
    for (let i = -2; i <= 2; i++) {
        if (board[x + i] && board[x + i][y + i] === currentPlayer) count++;
        else count = 0;
        if (count === 3) return true;
    }

    count = 0;
    for (let i = -2; i <= 2; i++) {
        if (board[x + i] && board[x + i][y - i] === currentPlayer) count++;
        else count = 0;
        if (count === 3) return true;
    }

    return false;
}
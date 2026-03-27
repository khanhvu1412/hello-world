let engish = ["hello", "book", "computer", "dog", "cat"];
let vienamese = ["xin chào", "quyển sách", "máy tính", "chó", "mèo"];

function translateWord() {
    let input = document.getElementById("inputWord").value.toLowerCase();
    let result = document.getElementById("result");

    let found = false;

    for (let i = 0; i < engish.length; i++) {
        if (input === engish[i]) {
            result.innerHTML = "Nghĩa: " + vienamese[i];
            found = true;
            break;
        }

        if (input === vienamese[i]) {
            result.innerHTML = "Nghĩa: " + engish[i];
            found = true;
            break;
        }
    }
    if (!found) {
        result.innerHTML = "Không tìm thấy kết quả";
    }
}
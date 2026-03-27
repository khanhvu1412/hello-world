// Bài 1: Nối các phần tử trong mảng thành chuỗi
let myColor = ["Red", "Green", "White", "Black"];
let str = myColor.join(",");

console.log("Chuỗi str: " + str);

// Bài 2: Chèn dấu "-" giữa các số chẵn
// let number = "025468";

function insertDash(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (str[i] % 2 === 0 &&
            str[i + 1] % 2 === 0
        ) {
            result += "-";
        }
    }

    return result;
}

console.log(insertDash("02546878"));

// Bài 3: Chuyển đổi chữ thường sang chữ hoa và ngược lại
function swapCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= "a" && char <= "z") {
            result += char.toUpperCase();
        } else if (char >= "A" && char <= "Z") {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}

let input = "the quick brown fox";
console.log((swapCase(input)));
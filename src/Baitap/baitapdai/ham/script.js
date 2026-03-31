//Phần 1
// Bài 1
function alertMessage(mess) {
    mess = "Xin chào";
    document.getElementById("bai1").innerHTML = mess;
}

// Bài 2
function countNum(number) {
    return number + 1;
}

let num = countNum(4);
document.getElementById("bai2").innerHTML = num

// Bài 3
function mesageMath(num1, num2) {
    let result = 0;

    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);

    if (num1 > num2) {
        document.getElementById("bai3").innerHTML = "Số " + num1 + " lớn hơn số " + num2;
    }

    if (num1 <= num2) {
        result = num1 + num2;
        document.getElementById("bai3").innerHTML = "Tổng của 2 số là: " + result;
    }
}

// Bài 4
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

result = 0;
// Trước khi gọi hàm
document.getElementById("bai4-1").innerHTML = "Khi chưa gọi hàm: " + result;

// Gọi hàm
result = addNumbers();

// Sau khi goọi hàm
document.getElementById("bai4-2").innerHTML = "Khi đã gọi hàm: " + result;


// Bài 5
function timSao(star) {
    star = document.getElementById("star").value;

    let ngoiSao = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let chomSao = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

    let found = false;
    for (let i = 0; i < ngoiSao.length; i++) {
        if (star === ngoiSao[i]) {
            document.getElementById("bai5-1").innerHTML = chomSao[i];
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById("bai5-1").innerHTML = "Không tìm thấy";
    }
}

//
// Phần 2
// Bài 1
function binhPhuong(num) {
    num = Number(document.getElementById("num").value);
    let result = num * num;

    document.getElementById("bai1-par2").innerHTML = "Bình phương của " + num + " là: " + result;
}

// Bài 2
// Cách 1
// function dienTichTron(banKinh) {
//     banKinh = Number(document.getElementById("dienTich").value);
//     let resultS = banKinh * banKinh * 3.14;
//     document.getElementById("resultS").innerHTML = resultS;
// }
//
// function chuViTron(banKinh) {
//     banKinh = Number(document.getElementById("chuVi").value);
//     let resultC = 2 * banKinh * 3.14;
//     document.getElementById("resultC").innerHTML = resultC;
//
// }
// Cách 2
function hinhTron(banKinh) {
    banKinh = Number(document.getElementById("banKinh").value);

    let dienTich = banKinh * banKinh * 3.14;
    let chuVi = 2 * banKinh * 3.14;

    document.getElementById("bai2-part2").innerHTML =
        "Diện tích hình trong là: " + dienTich + "<br/>" +
        "Chu vi hình tròn là: " + chuVi;
}

// Bài 3
function tinhGiaiThua() {
    let num = Number(document.getElementById("numA").value);
    let giaiThua = 1;

    if (num < 0) {
        document.getElementById("bai3-part2").innerHTML = "Không có giai thừa cho số âm";
        return;
    }

    for (let i = 1; i <= num; i++) {
        giaiThua *= i;
    }

    document.getElementById("bai3-part2").innerHTML = "Giai thừa là: " + giaiThua;
}

// Bài 4
function checkNumber() {
    let num = document.getElementById("checkNum").value;

    if (/^[0-9]$/.test(num)) {
        // return true;
        document.getElementById("bai4-part2").innerHTML = num + " là số";
    } else {
        document.getElementById("bai4-part2").innerHTML = num + " không phải số";
        // return false;
    }
}

// Bài 5
// Cách 1
function minNumber(a, b, c) {
    let min = a;

    if (b < min) {
        min = b;
    }

    if (c < min) {
        min = c
    }

    return min;
}

let numMin = minNumber(10, 34, 3);

// Cách 2
// function minNumber() {
//     let arrNum = [10, 34, 3];
//     let min = arrNum[0];
//
//     for (let i = 0; i < arrNum.length; i++) {
//         if (arrNum[i] < min) {
//             min = arrNum[i];
//         }
//     }
//
//     return min;
//
// }
//
// let numMin = minNumber();
document.getElementById("bai5-part2").innerHTML = "Số nhỏ nhất là: " + numMin;

// Bài 6
function checkNumDuong() {
    let num = Number(document.getElementById("checkNumDuong").value);

    if (num > 0 && Number.isInteger(num)) {
        document.getElementById("bai6-part2").innerHTML = num + " là số nguyên dương";
    } else {
        document.getElementById("bai6-part2").innerHTML = num + " không phải số nguyên dương";

    }
}

// Bài 7
function doiCho(a, b) {
    let temp = a;
    a = b;
    b = temp;

    return [a, b]
}

let swap = doiCho(4, 7);

document.getElementById("bai7-part2").innerHTML = "Đổi chỗ: " + swap;

// Bài 8
function daoNguoc() {
    let arr = ["Xin", "chào", "các", "bạn"];

    let result = arr.reverse();

    return result;
}

console.log(daoNguoc());

// Bài 9
function chekKyTu() {
    let arrKyTu = [4, 6, 3, 2, 7, 44, 88, 3, 5, 2, 77, 2, 54];
    let count = 0;

    let kyTu = Number(document.getElementById("kyTu").value);


    for (let i = 0; i < arrKyTu.length; i++) {
        if (kyTu === arrKyTu[i]) {
            count++;
        }
    }

    if (count > 0) {
        document.getElementById("bai9-part2").innerHTML = "Số lần xuất hiện: " + count;
    } else {
        document.getElementById("bai9-part2").innerHTML = "Không xuất hiện: -1";

    }
}
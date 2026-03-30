//Phần 1
//
// Bài 1
let array = [5, 12, 8, 20, 3, 15, 7, 10, 25, 1];
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
        count++;
    }
}

document.getElementById("bai1").innerHTML = "Số phần tử >= 10: " + count;

// Bài 2
let numbers = [50, 6, 3, 73, 66, 22, 89, 34, 22, 18];
let max1 = numbers[0];
let index = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max1) {
        max1 = numbers[i];
        index = i;
    }
}

document.getElementById("bai2").innerHTML = "Số lớn nhất là " + max1 + " vị trí của nó là " + index;

// Bài 3
let arrNumber = [5, 10, 30, -4, 90, 55];
let max2 = arrNumber[0];
let sum = 0;

for (let i = 0; i < arrNumber.length; i++) {
    sum += arrNumber[i];

    if (arrNumber[i] > max2) {
        max2 = arrNumber[i];
    }
}

let avg = sum / arrNumber.length;
document.getElementById("bai3").innerHTML = "Số lớn nhất là " + max2 + ". Giá trị trung bình của các phần tử là: " + avg;

// Bài 4
let arrStr = ["Máy bay", "Ô tô", "Du thuyền", "Xe đạp", "Xe máy"];
// let daoNguoc = arrStr.reverse().join(" - ");
document.getElementById("bai4-1").innerHTML = "Mảng: " + arrStr.join(" - ");
document.getElementById("bai4-2").innerHTML = "Đảo ngược: " + arrStr.reverse().join(" - ");

// Bài 5
let arrAm = [5, -3, 10, -34, 6, 15, -22, -40];
let countNum = 0;
for (let i = 0; i < arrAm.length; i++) {
    if (arrAm[i] < 0) {
        countNum++;
    }
}

document.getElementById("bai5-1").innerHTML = "Mảng: " + arrAm.join(", ");
document.getElementById("bai5-2").innerHTML = "Số âm là: " + countNum + " số";

// Bài 6
function doanNumber() {
    let valueBai6 = Number(document.getElementById("doanNumber").value);
    let arrNumBai6 = [5, 8, 2, 10, 55, 45, 30, 100];
    // let indexNum = -1;

    // Cách 1
    // for (let i = 0; i < arrNum.length; i++) {
    //     if (value === arrNum[i]) {
    //         indexNum = i;
    //         break;
    //     }
    // }
    //
    // if (indexNum > -1) {
    //     document.getElementById("bai6-1").innerHTML = "Giá trị " + value + " thuộc mảng arrNum";
    // } else {
    //     document.getElementById("bai6-1").innerHTML = "Giá trị " + value + " không thuộc mảng arrNum";
    // }

    // Cách 2
    // let found = arrNum.includes(value);
    // if (found) {
    //     document.getElementById("bai6-1").innerHTML = "Giá trị " + value + " thuộc mảng arrNum";
    //     } else {
    //     document.getElementById("bai6-1").innerHTML = "Giá trị " + value + " không thuộc mảng arrNum";
    // }
    //

    // Cách 3

    let index = arrNumBai6.indexOf(valueBai6);
    if (index !== -1) {
        document.getElementById("bai6-1").innerHTML = "Giá trị " + valueBai6 + " thuộc mảng arrNum";
    } else {
        document.getElementById("bai6-1").innerHTML = "Giá trị " + valueBai6 + " không thuộc mảng arrNum";
    }
}

// Bài 7
let arrNumBai7 = [4, 6, 2, 66, 34, 21, 56];

function handleInput() {
    let valueBai7 = Number(document.getElementById("inputBai7").value);
    let index = -1;

    for (let i = 0; i < arrNumBai7.length; i++) {
        if (arrNumBai7[i] === valueBai7) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        for (let i = index; i < arrNumBai7.length - 1; i++) {
            arrNumBai7[i] = arrNumBai7[i + 1];
        }
        arrNumBai7[arrNumBai7.length - 1] = 0;
    }

    document.getElementById("bai7-1").innerText = arrNumBai7.join(", ");
}

// Bài 8
let mangSo = [4, 6, 23, 5, 33, 56, 32];
// let sort = mangSo.sort();
document.getElementById("bai8-1").innerHTML = mangSo.join(" - ");
document.getElementById("bai8-2").innerHTML = "Sắp xếp nhỏ -> lớn: " + mangSo.sort((a, b) => a - b).join(" - ");
document.getElementById("bai8-3").innerHTML = "Sắp xếp lớn -> nhỏ: " + mangSo.sort((a, b) => b - a).join(" - ");

// Bài 9
let a = [5, 57, 43, 22, 20, 58, 6, 99, 34, 12];
let b = [55, 56, 43, 66, 22, 45, 42, 2, 6, 19];

let c = a.concat(b);

document.getElementById("bai9-1").innerHTML = "Mảng đã nối: " + c.join(", ");

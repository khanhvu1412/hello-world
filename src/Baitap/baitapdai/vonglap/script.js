//Phần 1

// Bài 1
function dem() {
    let count = "";
    let mess = ""
    for (let i = 0; i <= 100; i++) {
        count += "</br>" + "Số " + i + "," + "</br>";

        if (i === 99) {
            alert("Đã hoàn thành!");
        }
    }

    document.getElementById("result").innerHTML = count;
}


// Bài 2
function kiemTraNhietDo() {
    let temp = Number(prompt("Nhập nhiệt độ: "));

    while (temp > 100 || temp < 20) {
        if (temp > 100) {
            alert("Nhiệt độ quá cao. Yêu cầu giảm nhiệt độ.");
        } else if (temp < 20) {
            alert("Nhiệt độ quá thấp. Hãy tăng nhiệt độ");
        }

        temp = Number(prompt("Nhập lại nhiệt độ"))
    }
    alert("Nhiệt độ bình thường.");
}


// Bài 3
function fibonacci() {
    let n = 20;
    let a = 0, b = 1;
    let result = "";

    for (let i = 0; i < n; i++) {
        result += a + "";

        let temp = a + b;
        a = b;
        b = temp;
    }

    document.getElementById("result").innerHTML = result;
}

// Bài 4
function fibonacciChiaHet5() {
    let a = 0, b = 1;

    while (true) {
        if (a % 5 === 0 && a !== 0) {
            document.getElementById("result").innerHTML = "Số Fibonacci đầu tiên chia hết cho 5 là: " + a;
            break;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
}

// Bài 5
function fibonacciSum() {
    let n = 20;
    let a = 0, b = 1;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += a;

        let temp = a + b;
        a = b;
        b = temp;
    }
    document.getElementById("result").innerHTML = "Tổng 20 số Fibonacci đầu tiên là: " + sum;
}

// // Bài 6
function tongChiaHet7() {
    let count = 0;
    let sum = 0;

    for (let i = 1; count < 30; i++) {
        if (i % 7 === 0) {
            sum += i;
            count++;
        }
    }

    document.getElementById("result").innerHTML = "Tổng 30 chia hết cho 7 là: " + sum;
}

// Bài 7
function fizzBuzz() {
    let mess = "";

    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            mess += "FizzBuzz</br>";
        } else if (i % 3 === 0) {
            mess += " Fizz</br>";
        } else if (i % 5 === 0) {
            mess += "Buzz</br>";
        } else {
            mess += i + "</br>";
        }
    }

    document.getElementById("result").innerHTML = mess;
}

// Bài 8
function doanSo() {
    let min = Number(prompt("Nhập số nhỏ nhất: "));
    let max = Number(prompt("Nhập số lớn nhất: "));

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Khoảng không hợp lệ!");
        return;
    }

    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    let count = 0;
    let guess;

    while (count < 3) {
        guess = Number(prompt("Nhập số bạn đoán: "));

        if (guess === random) {
            alert("🎉 Chúc mừng! Bạn đoán đúng!");
            return;
        } else if (guess > random) {
            alert("📉 Số bạn đoán lớn hơn!");
        } else {
            alert("📈 Số bạn đoán nhỏ hơn!");
        }

        count++
    }
    alert("❌ Bạn đã thua! Số đúng là: " + random);
}


// Phần 2

// Bài 1
// function chuyenDoiDo() {
//     let c = Number(prompt("Nhập độ C: "));
//     let f = c * 9 / 5 + 32;
//
//     alert("Độ F = " + f);
// }
//
// // Bài 2
// function chuyenDoiDoDai() {
//     let m = Number(prompt("Nhập độ dài m: "));
//     let ft = m * 3.2808;
//
//     alert("Độ dài ft = " + ft);
// }
//
// // Bài 3
// function dienTichHinhVuong() {
//     let canhA = Number(prompt("Nhập cạnh a: "));
//
//     let s = canhA * canhA;
//     alert("Diện tích hình vuông là: " + s);
// }
//
// // Bài 4
// function dienTichHinhChuNhat() {
//     let canhA = Number(prompt("Nhập cạnh a: "));
//     let canhB = Number(prompt("Nhập cạnh b: "));
//
//     let s = canhA * canhB;
//     alert("Diện tích hình chữ nhật là: " + s);
// }
//
// // Bài 5
// function dienTichtamGiacVuong() {
//     let canhKeA = Number(prompt("Nhập cạnh a: "));
//     let canhKeB = Number(prompt("Nhập cạnh b: "));
//
//     let s = 1 / 2 * canhKeA * canhKeB;
//     alert("Diện tích tam giác vuông  là: " + s);
// }
//
// // Bài 6
// function phuongTrinhBac1() {
//     let a = Number(prompt("Nhập a: "));
//     let b = Number(prompt("Nhập b: "));
//
//     if (a === 0) {
//         if (b === 0) {
//             alert("Phương trình vô số nghiệm");
//         } else {
//             alert("Phương trình vô nghiệm");
//         }
//     } else {
//         let x = -b / a;
//         alert("Nghiệm x = " + x);
//     }
// }
//
// // Bài 7
// function phuongTrinhBac2() {
//     let a = Number(prompt("Nhập a: "));
//     let b = Number(prompt("Nhập b: "));
//     let c = Number(prompt("Nhập c: "));
//
//     let delta = b * b - 4 * a * c;
//
//     if (delta < 0) {
//         alert("Phương trình vô nghiệm");
//     } else if (delta === 0) {
//         let x = -b / (2 * a);
//         alert("Phuong trình có nghiệm kép: " + x);
//     } else {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//
//         alert("x1 = " + x1 + "<br/>" + "x2 = " + x2);
//     }
// }
//
// // Bài 8
// function checkTuoi() {
//     let number = Number(prompt("Nhập sô bất kỳ: "));
//
//     if (number > 0 && number < 120) {
//         alert("Tuổi hợp lệ");
//     } else {
//         alert("Tuổi không hợp lệ")
//         j
//     }
// }
//
// // Bài 9
// function checkCanhTamGiac() {
//     let a = Number(prompt("Nhập a: "));
//     let b = Number(prompt("Nhập b: "));
//     let c = Number(prompt("Nhập c: "));
//
//     if (a > 0 && b > 0 && c > 0 &&
//         a + b > c &&
//         b + c > a &&
//         a + c > b) {
//         alert("Là tam giác");
//     } else {
//         alert("Không phải tam giác");
//     }
// }
//
// // Bài 10
// function tinhGiaDien() {
//     let kwh = Number(prompt("Nhập số điện: "));
//     let cost = 0;
//
//     if (kwh <= 50) {
//         cost = kwh * 1678;
//     } else if (kwh <= 100) {
//         cost = 50 * 1678 + (kwh - 50) * 1734;
//     } else {
//         cost = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
//     }
//
//     alert("Tiền điện: " + cost.toLocaleString());
// }
//
// // Bài 11
// function theThuNhapCaNhan() {
//     let income = Number(prompt("Nhập thu nhập: "));
//     let tax = 0;
//
//     if (income <= 5000000) {
//         tax = income * 0.05;
//     } else if (income <= 10000000) {
//         tax = income * 0.1;
//     } else {
//         tax = income * 0.2;
//     }
//
//     alert("Thuế: " + tax.toLocaleString());
// }
//
// // Bài 12
// function laiNganHang() {
//     let money = Number(prompt("Nhập tiền ban đầu: "));
//     let months = Number(prompt("Số tháng: "));
//     let rate = Number(prompt("Lãi suất (%/tháng): ")) / 100;
//
//     let total = money;
//
//     for (let i = 0; i < months; i++) {
//         total += total * rate;
//     }
//
//     alert("Tổng tiền: " + total.toLocaleString());
// }

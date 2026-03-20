//Phần 1
//
// // Bài 1
// function dem() {
//     let count = "";
//     let mess = ""
//     for (let i = 0; i <= 100; i++) {
//         count += "</br>" + "Số " + i + "," + "</br>";
//
//         if (i === 99) {
//             alert("Đã hoàn thành!");
//         }
//     }
//
//     document.getElementById("result").innerHTML = count;
// }
//
//
// // Bài 2
// function kiemTraNhietDo() {
//     let temp = Number(prompt("Nhập nhiệt độ: "));
//
//     while (temp > 100 || temp < 20) {
//         if (temp > 100) {
//             alert("Nhiệt độ quá cao. Yêu cầu giảm nhiệt độ.");
//         } else if (temp < 20) {
//             alert("Nhiệt độ quá thấp. Hãy tăng nhiệt độ");
//         }
//
//         temp = Number(prompt("Nhập lại nhiệt độ"))
//     }
//     alert("Nhiệt độ bình thường.");
// }
//
//
// // Bài 3
// function fibonacci() {
//     let n = 20;
//     let a = 0, b = 1;
//     let result = "";
//
//     for (let i = 0; i < n; i++) {
//         result += a + "";
//
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
//
//     document.getElementById("result").innerHTML = result;
// }
//
// // Bài 4
// function fibonacciChiaHet5() {
//     let a = 0, b = 1;
//
//     while (true) {
//         if (a % 5 === 0 && a !== 0) {
//             document.getElementById("result").innerHTML = "Số Fibonacci đầu tiên chia hết cho 5 là: " + a;
//             break;
//         }
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
// }
//
// // Bài 5
// function fibonacciSum() {
//     let n = 20;
//     let a = 0, b = 1;
//     let sum = 0;
//
//     for (let i = 0; i < n; i++) {
//         sum += a;
//
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
//     document.getElementById("result").innerHTML = "Tổng 20 số Fibonacci đầu tiên là: " + sum;
// }
//
// // // Bài 6
// function tongChiaHet7() {
//     let count = 0;
//     let sum = 0;
//
//     for (let i = 1; count < 30; i++) {
//         if (i % 7 === 0) {
//             sum += i;
//             count++;
//         }
//     }
//
//     document.getElementById("result").innerHTML = "Tổng 30 chia hết cho 7 là: " + sum;
// }
//
// // Bài 7
// function fizzBuzz() {
//     let mess = "";
//
//     for (let i = 1; i <= 100; i++) {
//
//         if (i % 3 === 0 && i % 5 === 0) {
//             mess += "FizzBuzz</br>";
//         } else if (i % 3 === 0) {
//             mess += " Fizz</br>";
//         } else if (i % 5 === 0) {
//             mess += "Buzz</br>";
//         } else {
//             mess += i + "</br>";
//         }
//     }
//
//     document.getElementById("result").innerHTML = mess;
// }
//
// // Bài 8
// function doanSo() {
//     let min = Number(prompt("Nhập số nhỏ nhất: "));
//     let max = Number(prompt("Nhập số lớn nhất: "));
//
//     if (isNaN(min) || isNaN(max) || min >= max) {
//         alert("Khoảng không hợp lệ!");
//         return;
//     }
//
//     let random = Math.floor(Math.random() * (max - min + 1)) + min;
//
//     let count = 0;
//     let guess;
//
//     while (count < 3) {
//         guess = Number(prompt("Nhập số bạn đoán: "));
//
//         if (guess === random) {
//             alert("🎉 Chúc mừng! Bạn đoán đúng!");
//             return;
//         } else if (guess > random) {
//             alert("📉 Số bạn đoán lớn hơn!");
//         } else {
//             alert("📈 Số bạn đoán nhỏ hơn!");
//         }
//
//         count++
//     }
//     alert("❌ Bạn đã thua! Số đúng là: " + random);
// }


// Phần 2

// Bài 1
function dayFibonaci() {
    let number = Number(prompt("Nhập số lượng: "));
    let a = 0, b = 1;
    let result = "";

    for (let i = 0; i < number; i++) {
        result += a + " ";

        let temp = a + b;
        a = b;
        b = temp;
    }

    document.getElementById("result").innerHTML = result;
}


// Bài 2
function tinhGiaiThua() {
    let number = Number(prompt("Nhập số bất kỳ: "));
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    document.getElementById("result").innerHTML = result;
}

// Bài 3
function inTamGiacVuong() {
    let a = 5;
    let result = "";
// --------------
    result += "Góc trái dưới: </br>";
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "</br>";
    }

    result += "</br>";
// -------------
    result += "Góc trái trên: </br>";
    for (let i = a; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "<br>";
    }
    result += "<br>";
// ------------
    result += "Góc phải dưới:<br>";
    for (let i = 1; i <= a; i++) {

        // space
        for (let j = 1; j <= a - i; j++) {
            result += "&nbsp;";
        }

        // sao
        for (let j = 1; j <= i; j++) {
            result += "*";
        }

        result += "<br>";
    }

    result += "<br>";
// --------------
    result += "Góc phải trên: <br>";
    for (let i = a; i >= 1; i--) {
        for (let j = 1; j <= a - 1; j++) {
            result += "&nbsp;";
        }

        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}


// Bài 4
function inHinhChuNhat() {
    let rows = 6;
    let cols = 20;
    let result = "";

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {

            if (i === 1 || i === rows || j === 1 || j === cols) {
                result += "*";
            } else {
                result += "&nbsp;&nbsp;";
            }
        }

        result += "<br>";
    }

    document.getElementById("result").innerHTML = result;
}


// Bài 5
function laiNganHang() {
    let tienGoc = Number(prompt("Nhập số tiền ban đầu: "));
    let thang = Number(prompt("Nhập số tháng: "));
    let laiSuat = Number(prompt("Nhập lãi suất (%/tháng): ")) / 100;

    let tongTien = tienGoc;

    for (let i = 1; i <= thang; i++) {
        tongTien += tongTien * laiSuat;
    }

    document.getElementById("result").innerHTML = "Tổng tiền sau " + thang + " tháng là: " + tongTien.toLocaleString() + " VNĐ";
}


// Bài 6
function inHinhTraiTim() {
    let result = "";

    for (let y = 1.5; y > -1.5; y -= 0.1) {
        for (let x = -1.5; x < 1.5; x += 0.05) {
            let a = x * x + y * y - 1;
            if (a * a * a - x * x * y * y * y <= 0) {
                result += "*";
            } else {
                result += "&nbsp;";
            }
        }
        result += "<br>";
    }

    document.getElementById("result").innerHTML = result;
}
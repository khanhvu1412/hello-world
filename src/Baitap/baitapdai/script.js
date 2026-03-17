// //Phần 1
//
// // Bài 1
// function tinhAB() {
//     let a = Number(prompt("Nhập số a: "));
//     let b = Number(prompt("Nhập số a: "));
//
//     if (a % b == 0) {
//         alert("A chia hết cho B");
//     } else {
//         alert("A không chia hết cho B");
//     }
// }
//
// // Bài 2
// function kiemTraAge() {
//     let age = prompt("Nhập tuổi của bạn: ");
//
//     if (age < 15) {
//         alert("Bạn chưa đủ tuổi học lớp 10.");
//     } else if (age >= 15 && age <= 19) {
//         alert("Bạn đủ tuổi học lớp 10.");
//     } else {
//         alert("Bạn đã quá tuổi học lớp 10.");
//     }
// }
//
// // Bài 3
// function checkNumber1() {
//     let number = prompt("Nhập số của bạn: ");
//
//     if (number > 0) {
//         alert("Số " + number + " lớn hơn số 0");
//     } else {
//         alert("Số " + number + " nhỏ hơn số 0");
//     }
// }
//
// // Bài 4
// function checkNumber2() {
//     let x = Number(prompt("Nhập số x: "));
//     let y = Number(prompt("Nhập số y: "));
//     let z = Number(prompt("Nhập số z: "));
//
//     let max;
//
//     if (x > y && x > z) {
//         max = x;
//     } else if (y > x && y > z) {
//         max = y;
//     } else {
//         max = z;
//     }
//
//     alert("Số lớn nhất là: " + max);
// }
//
// // Bài 5
// function xepLoaiHocLuc() {
//     let test = Number(prompt("Nhập điểm kiểm tra: "));
//     let mid = Number(prompt("Nhập điểm giữa kỳ: "));
//     let final = Number(prompt("Nhập điểm cuối kỳ: "));
//
//     let avg = (test + mid * 2 + final * 3) / 6;
//
//     let result;
//
//     if (avg >= 8) {
//         result = "Giỏi";
//     } else if (avg >= 6.5) {
//         result = "Khá";
//     } else if (avg >= 5) {
//         result = "Trung bình";
//     } else {
//         result = "Yếu";
//     }
//
//     alert("Điểm TB: " + avg.toFixed(2) + "-> Xếp loại: " + result);
// }
//
// // Bài 6
// function tinhHoaHong() {
//     let sales = Number(prompt("Nhập doanh số (VNĐ): "));
//     let commission;
//
//     if (sales >= 100000000) {
//         commission = sales * 0.10;
//     } else if (sales >= 50000000) {
//         commission = sales * 0.07;
//     } else if (sales >= 20000000) {
//         commission = sales * 0.05;
//     } else {
//         commission = sales * 0.02
//     }
//
//     alert("Hoa hồng nhận được: " + commission.toLocaleString() + " VNĐ");
// }
//
// // Bài 7
// function tinhCuocDienThoai() {
//     let minutes = Number(prompt("Nhập số phút gọi: "));
//     let cost = 25000;
//
//     if (minutes <= 50) {
//         cost += minutes * 600;
//     } else if (minutes <= 100) {
//         cost += 50 * 600 + (minutes - 50) * 400;
//     } else {
//         cost += 50 * 600 + 50 * 400 + (minutes - 100) * 200;
//     }
//
//     alert("Tổng cước: " + cost.toLocaleString() + " VNĐ");
// }


// Phần 2

// Bài 1
function chuyenDoiDo() {
    let c = Number(prompt("Nhập độ C: "));
    let f = c * 9 / 5 + 32;

    alert("Độ F = " + f);
}

// Bài 2
function chuyenDoiDoDai() {
    let m = Number(prompt("Nhập độ dài m: "));
    let ft = m * 3.2808;

    alert("Độ dài ft = " + ft);
}

// Bài 3
function dienTichHinhVuong() {
    let canhA = Number(prompt("Nhập cạnh a: "));

    let s = canhA * canhA;
    alert("Diện tích hình vuông là: " + s);
}

// Bài 4
function dienTichHinhChuNhat() {
    let canhA = Number(prompt("Nhập cạnh a: "));
    let canhB = Number(prompt("Nhập cạnh b: "));

    let s = canhA * canhB;
    alert("Diện tích hình chữ nhật là: " + s);
}

// Bài 5
function dienTichtamGiacVuong() {
    let canhKeA = Number(prompt("Nhập cạnh a: "));
    let canhKeB = Number(prompt("Nhập cạnh b: "));

    let s = 1 / 2 * canhKeA * canhKeB;
    alert("Diện tích tam giác vuông  là: " + s);
}

// Bài 6
function phuongTrinhBac1() {
    let a = Number(prompt("Nhập a: "));
    let b = Number(prompt("Nhập b: "));

    if (a === 0) {
        if (b === 0) {
            alert("Phương trình vô số nghiệm");
        } else {
            alert("Phương trình vô nghiệm");
        }
    } else {
        let x = -b / a;
        alert("Nghiệm x = " + x);
    }
}

// Bài 7
function phuongTrinhBac2() {
    let a = Number(prompt("Nhập a: "));
    let b = Number(prompt("Nhập b: "));
    let c = Number(prompt("Nhập c: "));

    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        alert("Phương trình vô nghiệm");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert("Phuong trình có nghiệm kép: " + x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert("x1 = " + x1 + "<br/>" + "x2 = " + x2);
    }
}

// Bài 8
function checkTuoi() {
    let number = Number(prompt("Nhập sô bất kỳ: "));

    if (number > 0 && number < 120) {
        alert("Tuổi hợp lệ");
    } else {
        alert("Tuổi không hợp lệ")
        j
    }
}

// Bài 9
function checkCanhTamGiac() {
    let a = Number(prompt("Nhập a: "));
    let b = Number(prompt("Nhập b: "));
    let c = Number(prompt("Nhập c: "));

    if (a > 0 && b > 0 && c > 0 &&
        a + b > c &&
        b + c > a &&
        a + c > b) {
        alert("Là tam giác");
    } else {
        alert("Không phải tam giác");
    }
}

// Bài 10
function tinhGiaDien() {
    let kwh = Number(prompt("Nhập số điện: "));
    let cost = 0;

    if (kwh <= 50) {
        cost = kwh * 1678;
    } else if (kwh <= 100) {
        cost = 50 * 1678 + (kwh - 50) * 1734;
    } else {
        cost = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
    }

    alert("Tiền điện: " + cost.toLocaleString());
}

// Bài 11
function theThuNhapCaNhan() {
    let income = Number(prompt("Nhập thu nhập: "));
    let tax = 0;

    if (income <= 5000000) {
        tax = income * 0.05;
    } else if (income <= 10000000) {
        tax = income * 0.1;
    } else {
        tax = income * 0.2;
    }

    alert("Thuế: " + tax.toLocaleString());
}

// Bài 12
function laiNganHang() {
    let money = Number(prompt("Nhập tiền ban đầu: "));
    let months = Number(prompt("Số tháng: "));
    let rate = Number(prompt("Lãi suất (%/tháng): ")) / 100;

    let total = money;

    for (let i = 0; i < months; i++) {
        total += total * rate;
    }

    alert("Tổng tiền: " + total.toLocaleString());
}

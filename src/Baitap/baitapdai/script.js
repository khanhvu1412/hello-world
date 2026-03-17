//Phần 1

// Bài 1
function tinhAB() {
    let a = Number(prompt("Nhập số a: "));
    let b = Number(prompt("Nhập số a: "));

    if (a % b == 0) {
        alert("A chia hết cho B");
    } else {
        alert("A không chia hết cho B");
    }
}

// Bài 2
function kiemTraAge() {
    let age = prompt("Nhập tuổi của bạn: ");

    if (age < 15) {
        alert("Bạn chưa đủ tuổi học lớp 10.");
    } else if (age >= 15 && age <= 19) {
        alert("Bạn đủ tuổi học lớp 10.");
    } else {
        alert("Bạn đã quá tuổi học lớp 10.");
    }
}

// Bài 3
function checkNumber1() {
    let number = prompt("Nhập số của bạn: ");

    if (number > 0) {
        alert("Số " + number + " lớn hơn số 0");
    } else {
        alert("Số " + number + " nhỏ hơn số 0");
    }
}

// Bài 4
function checkNumber2() {
    let x = Number(prompt("Nhập số x: "));
    let y = Number(prompt("Nhập số y: "));
    let z = Number(prompt("Nhập số z: "));

    let max;

    if (x > y && x > z) {
        max = x;
    } else if (y > x && y > z) {
        max = y;
    } else {
        max = z;
    }

    alert("Số lớn nhất là: " + max);
}

// Bài 5
function xepLoaiHocLuc() {
    let test = Number(prompt("Nhập điểm kiểm tra: "));
    let mid = Number(prompt("Nhập điểm giữa kỳ: "));
    let final = Number(prompt("Nhập điểm cuối kỳ: "));

    let avg = (test + mid * 2 + final * 3) / 6;

    let result;

    if (avg >= 8) {
        result = "Giỏi";
    } else if (avg >= 6.5) {
        result = "Khá";
    } else if (avg >= 5) {
        result = "Trung bình";
    } else {
        result = "Yếu";
    }

    alert("Điểm TB: " + avg.toFixed(2) + "-> Xếp loại: " + result);
}

// Bài 6
function tinhHoaHong() {
    let sales = Number(prompt("Nhập doanh số (VNĐ): "));
    let commission;

    if (sales >= 100000000) {
        commission = sales * 0.10;
    } else if (sales >= 50000000) {
        commission = sales * 0.07;
    } else if (sales >= 20000000) {
        commission = sales * 0.05;
    } else {
        commission = sales * 0.02
    }

    alert("Hoa hồng nhận được: " + commission.toLocaleString() + " VNĐ");
}

// Bài 7
function tinhCuocDienThoai() {
    let minutes = Number(prompt("Nhập số phút gọi: "));
    let cost = 25000;

    if (minutes <= 50) {
        cost += minutes * 600;
    } else if (minutes <= 100) {
        cost += 50 * 600 + (minutes - 50) * 400;
    } else {
        cost += 50 * 600 + 50 * 400 + (minutes - 100) * 200;
    }

    alert("Tổng cước: " + cost.toLocaleString() + " VNĐ");
}
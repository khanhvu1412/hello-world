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
// Bài 2
// Bài 3
// Bài 4
// Bài 5
// Bài 6
// Bài 7
// Bài 8
// Bài 9
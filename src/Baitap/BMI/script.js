let weight = prompt("Nhập cân nặng: ");
let height = prompt("Nhập chiều cao: ");

BMI = weight / (height + height);

if (BMI < 18.5) {
    alert("Bạn đang thiếu cân. Ăn nhiều vào nhé!");
} else if (BMI < 25.0) {
    alert("Bạn đang rất ổn rồi. Cố giữ phong độ nhé!")
} else if (BMI < 30.0) {
    alert("Bạn thừa cân rồi. Giảm cân đi nhé!")
} else {
    alert("Bạn béo quá rồi. Giảm cân ngay đi!")
}
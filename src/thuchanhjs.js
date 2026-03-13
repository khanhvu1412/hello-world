// let inputWidth;
// let inputHeight;
//
// inputWidth = prompt("Nhập chiều rộng: ");
// inputHeight = prompt("Nhập chiều dài: ");
//
// let width = parseInt(inputWidth);
// let height = parseInt(inputHeight);
//
// let area = width * height;
//
// document.write("Diên tích hình chữ nhật là: " + area);

// Bài 1: Tính điểm trung bình
function diemTrungBinh() {
    let vatLy = prompt("Nhập điểm Vật lý: ");
    let hoaHoc = prompt("Nhập điểm Hoá học: ");
    let sinhHoc = prompt("Nhập điểm Sinh học: ");

    let diemLy = parseInt(vatLy);
    let diemHoa = parseInt(hoaHoc);
    let diemSinh = parseInt(sinhHoc);

    let total = diemLy + diemHoa + diemSinh;
    let trungBinh = total / 3;

    document.write("Điểm Vật lý: " + vatLy);
    document.write("<br/>");
    document.write("Điểm Hoá học: " + hoaHoc);
    document.write("<br/>");
    document.write("Điểm Sinh học: " + sinhHoc);
    document.write("<br/>");
    document.write("Điểm Tổng 3 môn : " + total);
    document.write("<br/>");
    document.write("Điểm trung bình: " + trungBinh);
}

// Bài 2: Chuyển đổi độ C sang độ F
function chuyenDoiNhietDo() {
    let c = Number(prompt("Nhập nhiệt độ C: "));

    let f = (9 * c / 5) + 32;

    document.write("Nhiệt độ đã đổi: " + f + " F");
}

// Bài 3: Tính diện tích hình tròn
function tinhStron() {
    let r = Number(prompt("Nhập bán kính r: "));

    let dienTichHinhTron = Math.PI * Math.pow(r, 2);

    document.write("Diện tích hình tròn: " + dienTichHinhTron);
}

// Bài 4: Tính chu vi hình tròn
function tinhCtron() {
    let r = Number(prompt("Nhập bán kính r: "));

    let chuViHinhTron = 2 * Math.PI * r;

    document.write("Chu vi hình tròn: " + chuViHinhTron);
}

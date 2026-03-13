let inputWidth;
let inputHeight;

inputWidth = prompt("Nhập chiều rộng: ");
inputHeight = prompt("Nhập chiều dài: ");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width * height;

document.write("Diên tích hình chữ nhật là: " + area);
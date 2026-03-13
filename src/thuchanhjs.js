let number = 10;

let float = 20.5;
let boolean = true;
let string = 'Hà Nội';

document.write('Number = ' + number);
document.write('<br/>');
document.write('Float = ' + float);
document.write('<br/>');
document.write('Boolean = ' + boolean);
document.write('<br/>');
document.write('String = ' + string);
document.write('<br/>');

let width = 20;

let height = 10;

let area = width * height;

document.write("Area: " + area);

function testNumer() {
    let a = prompt("Nhập số a: ");
    let b = prompt("Nhập số b: ");

    a = Number(a);
    b = Number(b);

    if (a % b === 0) {
        alert(a + " là bội số của " + b);
    } else {
        alert(a + " không phải là bội số của " + b);
    }
}
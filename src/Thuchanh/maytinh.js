function calculator(operation) {
    let a = Number(document.getElementById("numbera").value);
    let b = Number(document.getElementById("numberb").value);

    let result

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b == 0) {
                result = "Không thể chia cho 0"
            } else {
                result = a / b
            }
            break;
    }
    document.getElementById("result-calculate").innerHTML = result;
}

// function addition() {
//     let a = Number(document.getElementById("numbera").value);
//     let b = Number(document.getElementById("numberb").value);
//     result = a + b;
//     document.getElementById("result-calculate").innerHTML = result;
// }
//
// function subtraction() {
//     let a = Number(document.getElementById("numbera").value);
//     let b = Number(document.getElementById("numberb").value);
//     result = a - b;
//     document.getElementById("result-calculate").innerHTML = result;
// }
//
// function multiplication() {
//     let a = Number(document.getElementById("numbera").value);
//     let b = Number(document.getElementById("numberb").value);
//     result = a * b;
//     document.getElementById("result-calculate").innerHTML = result;
// }
//
// function division() {
//     let a = Number(document.getElementById("numbera").value);
//     let b = Number(document.getElementById("numberb").value);
//     result = a / b;
//     document.getElementById("result-calculate").innerHTML = result;
// }
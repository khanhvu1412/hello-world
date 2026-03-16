// Bài 1:
// let a = prompt("Nhập a: ");
// let b = prompt("Nhập b: ");
//
// result = (a + b < 4) ? "Below" : "Over";
// document.write(result);

// Bài 2:
let login = prompt("Nhập: ");

let message = (login == "Employee") ?
    "Hello" :
    (login == "Director") ?
        "Greetings" :
        (login == "") ?
            "No login" :
            "";

alert(message);
// Bài thực hành 1
let year = parseInt(prompt("Nhập năm muốn kiểm tra: "));
let isLeapYear = false;

// Cách 1:
// if (year % 4 == 0 ){
//     if(year % 100 == 0) {
//         if(year % 400 == 0) {
//             document.write("Năm: " + year + " là năm nhuận");
//         } else {
//             document.write("Năm: " + year + " không phải năm nhuận");
//         }
//     }else {
//         document.write("Năm: " + year + " là năm nhuận");
//     }
// } else {
//     document.write("Năm: " + year + " không phải năm nhuận");
// }

// Cách 2
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             isLeapYear = true;
//         }
//     } else {
//         isLeapYear = true;
//     }
// }
//
// if (isLeapYear) {
//     document.write("Năm: " + year + " là năm nhuận");
// } else {
//     document.write("Năm: " + year + " không phải năm nhuận");
// }

// Cách 3
let isDivisibleBy4 = year % 4 == 0;
if(isDivisibleBy4) {
    let isDivisibleBy100 = year % 100 == 0;
    if (isDivisibleBy100) {
        let isDivisibleBy400 = year % 400 == 0;
        if (isDivisibleBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    document.write("Năm: " + year + " là năm nhuận");
} else {
    document.write("Năm: " + year + " không phải năm nhuận");
}

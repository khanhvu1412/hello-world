// Thực hành 1
// let x = 0;
// let array = Array();
//
// function add_element_to_array() {
//     array[x] = document.getElementById("txtValue").value;
//     alert("Element: " + array[x] + " Added at index " + x);
//     x++;
//
//     document.getElementById("txtValue").value = "";
// }
//
// function display_array() {
//     let e = "<hr/>";
//     for (let i = 0; i < array.length; i++) {
//         e += "Element: " + i + " = " + array[i] + "<br/>";
//     }
//
//     document.getElementById("result").innerHTML = e;
// }

// Thực hành 2
// let x = [-3, 5, 1, 3, 2, 10];
//
// let first = 0;
// let last = x.length - 1;
//
// while (first < last) {
//     let b = x[first];
//     x[first] = x[last];
//     x[last] = b;
//     first++;
//     last--;
// }
// document.write(x);

// Thực hành 3
// let value = prompt("Enter the number: ");
// let numbers = [-3, 5, 1, 3, 2, 10];
// let index = -1;
//
// for (let i = 0; i < numbers.length; i++) {
//     if (value == numbers[i]) {
//         // alert("Value " + numbers[i] + " found it " + i);
//         index = i;
//     }
// }
//
// if (index > -1) {
//     alert("Value " + value + " found at " + index);
// } else {
//     alert("Value " + value + " not found");
// }

// Thực hành 4
let numbers = [-3, 5, 122, 3, 2, 10, 20];

let max = numbers[0];
let index = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}

alert("max " + max + " at position " + index);
let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

let firstNumber = "";
let operator = "";
let secondNumber = "";

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let value = btn.innerText;

        if (!isNaN(value)) {
            display.value += value;
        } else if (value === "+" || value === "-" || value === "x" || value === "/") {
            firstNumber = display.value;
            operator = value;
            display.value = "";
        } else if (value === "=") {
            secondNumber = display.value;

            let result;

            switch (operator) {
                case "+" :
                    result = Number(firstNumber) + Number(secondNumber);
                    break;
                case "-" :
                    result = Number(firstNumber) - Number(secondNumber);
                    break;
                case "x" :
                    result = Number(firstNumber) * Number(secondNumber);
                    break;
                case "/" :
                    result = Number(firstNumber) / Number(secondNumber);
                    break;

            }
            display.value = result;
        }
        else if (value === "C"){
            display.value = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }
    })
})
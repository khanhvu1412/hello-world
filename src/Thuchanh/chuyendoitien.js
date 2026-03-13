function convertMoney() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    let result = amount * to / from;

    document.getElementById("result").innerHTML = "Result: " + result
}
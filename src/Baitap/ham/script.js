// Bài 1
// function isPrime(num) {
//     if (num <= 1) return false;
//
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true
// }
//
// console.log(isPrime(3))

// Bài 2
function doi() {
    let feetValue = Number(document.getElementById("feetValue").value);
    let meterValue = Number(document.getElementById("meterValue").value);

    function feetToMeter(feet) {
        return 0.305 * feet;
    }

    function meterToFeet(meter) {
        return 3.279 * meter;
    }

    let result = "";

    if (feetValue || meterValue) {
        let meter = feetToMeter(feetValue);
        let feet = meterToFeet(meterValue);

        result = feetValue + " feet = " + meter.toFixed(2) + " meter" + "<br/>" +
            meterValue + " meter = " + feet.toFixed(2) + " feet";
    } else {
        result = "Vui lòng nhập giá trị.";
    }

    document.getElementById("result").innerHTML = result;
}
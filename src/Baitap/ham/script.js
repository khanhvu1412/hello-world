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
    let footValue = Number(document.getElementById("footValue").value);
    let meterValue = Number(document.getElementById("meterValue").value);

    function footToMeter(foot) {
        return 0.305 * foot;
    }

    function meterToFoot(meter) {
        return 3.279 * meter;
    }

    let result = "";

    if (footValue && meterValue) {
        let meter = footToMeter(footValue);
        let foot = meterToFoot(meterValue);

        result = footValue + " foot = " + meter.toFixed(2) + " meter" + "<br/>" +
            meterValue + " meter = " + foot.toFixed(2) + " foot";
    } else {
        result = "Vui lòng nhập giá trị.";
    }

    document.getElementById("result").innerHTML = result;
}
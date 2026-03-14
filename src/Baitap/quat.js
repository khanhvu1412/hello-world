let fan = document.getElementById("fan");

let btnOn = document.getElementById("turn-on");
let btnOff = document.getElementById("turn-off");

let speed1 = document.getElementById("speed-1");
let speed2 = document.getElementById("speed-2");
let speed3 = document.getElementById("speed-3");

btnOn.addEventListener("click", turnOn);
btnOff.addEventListener("click", turnOff);

speed1.addEventListener("click", function () {
    setSpeed(1);
});
speed2.addEventListener("click", function () {
    setSpeed(2);
});
speed3.addEventListener("click", function () {
    setSpeed(3);
});

function turnOn() {
    fan.classList.add("spin");
    fan.style.animationDuration = "2s";
}

function turnOff() {
    fan.classList.remove("spin");
}

function setSpeed(level) {
    switch (level) {
        case 1:
            fan.classList.add("spin");
            fan.style.animationDuration = "2s";
            break;
        case 2:
            fan.classList.add("spin");
            fan.style.animationDuration = "1s";
            break;
        case 3:
            fan.classList.add("spin");
            fan.style.animationDuration = "0.5s";
            break;
    }
}


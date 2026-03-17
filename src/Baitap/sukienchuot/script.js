function sayYes() {
    document.getElementById("result").innerHTML = "<3"
}

function moveNo() {
    let noBtn = document.getElementById("no");

    let width = window.innerWidth;
    let height = window.innerHeight;

    let randomX = Math.random() * (width - 100);
    let randomY = Math.random() * (height - 100);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
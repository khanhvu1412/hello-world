let images = document.querySelectorAll(".grid img");
let message = document.getElementById("message");

let correctList = [
    "1-1.png", "1-2.png", "1-3.png",
    "2-1.png", "2-2.png", "2-3.png",
    "3-1.png", "3-2.png", "3-3.png"
]

images.forEach(function (img) {
    img.addEventListener("click", function () {

        let random = Math.floor(Math.random() * correctList.length);
        img.src = "img/" + correctList[random];

        checkWin();

    });
});

function shuffleImages() {
    let shuffled = [...correctList];

    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    images.forEach(function (img, index) {
        img.src = "img/" + shuffled[index];
    });

    message.innerHTML = "";
}

function checkWin() {
    let isWin = true;

    images.forEach(function (img) {
        let current = img.src.split("/").pop();
        let correct = img.getAttribute("data-correct");

        if (current !== correct) {
            isWin = false;
        }
    });

    if (isWin) {
        message.innerHTML = "🎉 Bạn đã hoàn thành Puzzle!";
    } else {
        message.innerHTML = "";
    }

}
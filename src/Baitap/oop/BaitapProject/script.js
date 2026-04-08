/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, width, height, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.speed = speed;


    this.getHeroElement = function () {
        return '<img width="' + this.width + '"' +
            ' height="' + this.height + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        if (this.left < window.innerWidth - this.width) {
            this.left += this.speed;
            console.log('ok: ' + this.left);
        }

    }

    this.moveLeft = function () {
        if (this.left > 0) {
            this.left -= this.speed;
            console.log('ok: ' + this.left);

        }
    }

    this.moveUp = function () {
        if (this.top > 0) {
            this.top -= this.speed;
            console.log('ok: ' + this.top);

        }
    }

    this.moveDown = function () {
        if (this.top < window.innerHeight - this.height) {
            this.top += this.speed;
            console.log('ok: ' + this.top);

        }
    }
}

document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "ArrowRight":
            hero.moveRight();
            break;
        case "ArrowLeft":
            hero.moveLeft();
            break;
        case "ArrowUp":
            hero.moveUp();
            break;
        case "ArrowDown":
            hero.moveDown();
            break;
    }

    document.getElementById("game").innerHTML = hero.getHeroElement();
})


var hero = new Hero('luffy.jpg', 20, 30, 200, 250, 20);

function start() {
    document.getElementById('game').innerHTML = hero.getHeroElement();
    return hero.getHeroElement(start);
}

start();
// Bài tập 1
class Rectangle {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

    draw(ctx, x = 50, y = 50) {
        ctx.beginPath();
        ctx.rect(x, y, this.width, this.height);
        ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
        ctx.fill();
        ctx.stroke();
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
}

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let myRectangle = new Rectangle(300, 50);

myRectangle.draw(ctx);

console.log("Diện tích: " + myRectangle.getArea());
console.log("Chu vi: " + myRectangle.getPerimeter());

myRectangle.setSize(200, 100);

ctx.clearRect(0, 0, canvas.width, canvas.height);
myRectangle.draw(ctx);


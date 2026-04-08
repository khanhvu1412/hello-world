// Bài tập 1
// class Rectangle {
//     width;
//     height;
//
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     getWidth() {
//         return this.width;
//     }
//
//     getHeight() {
//         return this.height;
//     }
//
//     setWidth(width) {
//         this.width = width;
//     }
//
//     setHeight(height) {
//         this.height = height;
//     }
//
//     getArea() {
//         return this.width * this.height;
//     }
//
//     getPerimeter() {
//         return (this.width + this.height) * 2;
//     }
//
//     draw(ctx, x = 50, y = 50) {
//         ctx.beginPath();
//         ctx.rect(x, y, this.width, this.height);
//         ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
//         ctx.fill();
//         ctx.stroke();
//     }
//
//     setSize(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }
//
// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
//
// let myRectangle = new Rectangle(300, 50);
//
// myRectangle.draw(ctx);
//
// console.log("Diện tích: " + myRectangle.getArea());
// console.log("Chu vi: " + myRectangle.getPerimeter());
//
// myRectangle.setSize(200, 100);
//
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// myRectangle.draw(ctx);

// Bài tập 2
// class Temperature {
//     celsius;
//
//     constructor(celsius) {
//         this.celsius = celsius;
//     }
//
//     toFahrenheit() {
//         return 9 / 5 * this.celsius + 32;
//     }
//
//     toKelvins() {
//         return this.celsius + 273.15;
//     }
// }
//
// let temperature = new Temperature(28);
//
// let my_fahrenheit = temperature.toFahrenheit();
// let my_kelvin = temperature.toKelvins();
//
// document.getElementById("result").innerHTML = "Nhiệt độ F: " + my_fahrenheit + "<br/>" + "Nhiệt độ K: " + my_kelvin;

// Bài tập 3
class Mobile {
    constructor(name) {
        this.name = name;      // tên điện thoại
        this.battery = 100;    // pin tối đa 100
        this.isOn = false;     // trạng thái bật/tắt

        this.draft = "";       // tin đang soạn
        this.inbox = [];       // hộp thư đến
        this.sent = [];        // tin đã gửi
    }

    checkStatus() {
        return this.isOn;
    }

    turnOn() {
        this.isOn = true;
        console.log(this.name + " đã bật");
    }

    turnOff() {
        this.isOn = false;
        console.log(this.name + " đã tắt");
    }

    charge() {
        this.battery = 100;
        console.log(this.name + " đã sạc đầy");
    }

    useBattery() {
        if (this.battery > 0) {
            this.battery--;
        }
    }

    composeMessage(message) {
        if (!this.isOn) return console.log(this.name + " đang tắt");
        this.draft = message;
        this.useBattery();
    }

    sendMessage(receiver) {
        if (!this.isOn) return console.log(this.name + " đang tắt");
        if (this.draft === "") return console.log("Chưa có tin để gửi");

        receiver.receiveMessage(this.draft);
        this.sent.push(this.draft);

        console.log(this.name + " gửi " + this.draft);

        this.draft = "";
        this.useBattery();
    }

    receiveMessage(message) {
        if (!this.isOn) return; // Máy tắt thì không nhận
        this.inbox.push(message);
        this.useBattery();
    }

    viewInbox() {
        if (!this.isOn) return console.log(this.name + " đang tắt");
        console.log(this.name + " - Inbox: " + this.inbox);
        this.useBattery()
    }

    viewSent() {
        if (!this.isOn) return console.log(this.name + " đang tắt")
        console.log(this.name + " - Sent: " + this.sent);
        this.useBattery();
    }
}

let iphone = new Mobile("Iphone");
let nokia = new Mobile("Nokia");

iphone.turnOn();
nokia.turnOn();

nokia.composeMessage("Xin chào Iphone!");
nokia.sendMessage(iphone);

iphone.viewInbox();
iphone.composeMessage("Xin chào Nokia!");
iphone.sendMessage(nokia);





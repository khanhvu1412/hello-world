// function Student(id, name, address) {
//     this.id = id;
//     this.name = name;
//     this.address = address;
//     this.getInfor = function () {
//         return "Id= " + this.id + " Name= " + this.name + " Address= " + this.address;
//     }
// }
//
// var student = new Student(1, "Nguyen Van A", "Ha Noi");
//
// console.log(student.getInfor());

// var student = {
//     id: 1,
//     name: "Nguyen Van A",
//     address: "Hanoi",
//     getInfo: function() {
//         return "Id = " + this.id + " Name = " + this.name + " Addess = " + this.address;
//     }
// }
//
// console.log(student.name);
// console.log(student.getInfo())
//
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }


// function Mobile(id, name) {
//     this.id = id;
//     this.name = name;
//     this.message = "";
//     this.setMessage = function (message) {
//         this.message = message;
//     }
//
//     this.getMessage = function () {
//         return this.message;
//     }
//
//     this.sendMessage = function (message, mobile) {
//         mobile.setMessage(message);
//     }
// }
//
// var iphone = new Mobile(1, "Iphone");
// var android = new Mobile(2, "Samsung");
//
// iphone.sendMessage("Message from iphone", android);
// var message = android.getMessage();
//
// console.log(message);


// let person = {
//     name: {first: 'Bob', last: 'Smith'},
//     age: 32,
//     interests: ['music', 'skiing'],
//     greeting: function () {
//         console.log('Hi! I\'m ' + this.name.first + '.');
//     }
// };

// console.log(person.name.first);
// console.log(person.age);
// person.greeting();
//
// // =================
// console.log(person['name']['first']);
// console.log(person['age']);

// person.age = 45;
// person.name.last = "Johnson";
// person.height = "1.75m";
// person.sayGoodbye = function () {
//     console.log("Goodbye!");
// }
//
// person.sayGoodbye();

// ================================================

//Khai báo lớp Apple với các thuộc tính type, color,
//phương thức getAppleInfo()

// Cách 1 Khai báo bên trong
// function Apple (type) {
//     this.type = type;
//     this.color = "red";
//     this.getInfo = function() {
//         return this.color + ' ' + this.type + ' apple';
//     };
// }

// Cách 2 Khai báo hàm bằng thuộc tính prototype
// function Apple (type) {
//     this.type = type;
//     this.color = "red";
// }
// Apple.prototype.getInfo = function() {
//     return this.color + ' ' + this.type + ' apple';
// };


// let apple = new function() {
//     this.type = "OS";
//     this.color = "red";
//     this.getInfo = function () {
//         return this.color + ' ' + this.type + ' apple';
//     };
// }
// apple.color = "yellow";
// console.log(apple.getInfo());

// Canvas
// line
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// ctx.moveTo(0, 0);
// ctx.lineTo(200, 50);
// ctx.stroke();

//circle
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();


// text
// ctx.font= "30px Arial";
// ctx.fillText("Hello World", 10, 50);
// ctx.strokeText("Hello World", 10, 50);

// Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");
//
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);

// Gradient tròn

var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

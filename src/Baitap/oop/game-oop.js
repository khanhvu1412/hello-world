// Tạo đối tượng Car
class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 30;

        this.speed = 1;
        this.direction = "UP";

        this.image = new Image();
        this.image.src = "car.png";
    }

    move() {
        switch (this.direction) {
            case "UP":
                this.y -= this.speed;
                break;
            case "DOWN":
                this.y += this.speed;
                break;
            case "LEFT":
                this.x -= this.speed;
                break;
            case "RIGHT":
                this.x += this.speed;
                break;
        }
    }

    draw(ctx) {
        // ctx.fillStyle = "blue";
        // ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}

// Obstacle & Reward
class Obstacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 30;
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

class Reward {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
    }

    draw(ctx) {
        ctx.fillStyle = "gold";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

// Khởi tạo game
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let car = new Car(300, 200);

let obstacles = [];
let rewards = [];

let score = 0;
let gameOver = false;

// Tạo ngẫu nhiên vật thể
function randomPosition(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 5; i++) {
    obstacles.push(new Obstacle(randomPosition(600), randomPosition(400)));
    rewards.push(new Reward(randomPosition(600), randomPosition(400)));
}

function isOverlapping(newObj, list) {
    return list.some(obj =>
        newObj.x < obj.x + obj.size &&
        newObj.x + newObj.size > obj.x &&
        newObj.y < obj.y + obj.size &&
        newObj.y + newObj.size > obj.y
    );
}

for (let i = 0; i < 5; i++) {
    let newObs;

    do {
        newObs = new Obstacle(randomPosition(canvas.width - 30),
            randomPosition(canvas.height - 30)
        );
    } while (isOverlapping(newObs, obstacles));

    obstacles.push(newObs);
}

for (let i = 0; i < 5; i++) {
    let newReward;

    do {
        newReward = new Reward(
            randomPosition(canvas.width - 20),
            randomPosition(canvas.height - 20)
        );
    } while (
        isOverlapping(newReward, obstacles) ||
        isOverlapping(newReward, rewards)
        );
    rewards.push(newReward);
}

// Va chạm (quan trọng)
function isColliding(a, b) {
    return (
        a.x < b.x + b.size &&
        a.x + a.size > b.x &&
        a.y < b.y + b.size &&
        a.y + a.size > b.y
    );
}

// Điều khiển bàn phím
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") car.direction = "UP";
    if (e.key === "ArrowDown") car.direction = "DOWN";
    if (e.key === "ArrowLeft") car.direction = "LEFT";
    if (e.key === "ArrowRight") car.direction = "RIGHT";

    if (e.key === "Control") {
        car.speed = 3;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Control") {
        car.speed = 1;
    }
})

// Game loop (trái tim game)
function gameLoop() {
    ctx.fillStyle = "#e0f7fa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    if (gameOver) {
        alert("Game Over!");
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    car.move();
    if (car.x < 0 ||
        car.y < 0 ||
        car.x + car.size > canvas.width ||
        car.y + car.size > canvas.height) {
        gameOver = true;
    }

    car.draw(ctx);

    obstacles.forEach(obs => {
        obs.draw(ctx);

        if (isColliding(car, obs)) {
            gameOver = true;
        }
    });

    rewards.forEach((reward, index) => {
        reward.draw(ctx);

        if (isColliding(car, reward)) {
            score++;
            rewards.splice(index, 1); // Xoá phần thưởng
        }
    });

    document.getElementById("score").innerText = "Score: " + score;

    requestAnimationFrame(gameLoop);
}

gameLoop();

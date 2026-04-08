class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease() {
        if (this.weight > 0) {
            this.weight--;
        }
    }

    isEmpty() {
        return this.weight <= 0;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender; // true: male, false: female
        this.weight = weight;
    }

    isMale() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(apple) {
        return apple.getWeight() > 0;
    }

    eat(apple) {
        if (this.checkApple(apple)) {
            apple.decrease();
            this.weight++;
            console.log(this.name + " ăn 1 miếng táo")
        } else {
            console.log("Táo đã hết!");

        }
    }

    say(message) {
        console.log(this.name + ": " + message);
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}

let apple = new Apple();

let adam = new Human("Adam", true, 60);
let eva = new Human("Eva", false, 50);

while (!apple.isEmpty()) {
    eva.eat(apple);

    console.log("Cân nặng Eva: " + eva.getWeight());
    console.log("Táo còn: " + eva.getWeight());

    if (!apple.isEmpty()) {
        adam.eat(apple);

        console.log("Cân nặng Adam: " + adam.getWeight());
        console.log("Táo còn : " + apple.getWeight());
    }
}
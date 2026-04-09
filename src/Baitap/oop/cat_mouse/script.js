class Rat {
    constructor(name, weight, speed) {
        this.name_mouse = name;
        this.weight_mouse = weight;
        this.speed_mouse = speed;
        this.status = true;
    }

    getStatus() {
        return this.status
    }

    die() {
        this.status = false;
    }

    soundMouse() {
        console.log("Chít chít");
    }

    // actionMouse(sound) {
    //     this.sound_mouse = sound;
    //     alert(this.sound_mouse);
    // }
}

class Cat {

    constructor(name, weight, speed) {
        this.name_cat = name;
        this.weight_cat = weight;
        this.speed_cat = speed;
    }

    getWeightCat() {
        return this.weight_cat;
    }

    soundCat() {
        console.log("Meo meo");
    }

    catchMouse(mouse) {
        if (this.speed_cat > mouse.speed_mouse) {
            alert("Mèo đã bắt được chuột");
            return true;
        } else {
            alert("Mèo không bắt được chuột");
            return false;
        }
    }

    eatMouse(mouse) {
        if (mouse.getStatus()) {
            this.weight_cat += mouse.weight_mouse;
            mouse.die();
            alert("Mèo đã ăn chuột");
        } else {
            alert("Chuột đã chết không ăn được.");
        }
    }
}

let jelly = new Rat("Jelly", 10, 100);
let tom = new Cat("Tom", 20, 200);

jelly.soundMouse();
tom.soundCat();

if (tom.catchMouse(jelly)) {
    tom.eatMouse(jelly);
}

console.log("Cân nặng mèo: " + tom.getWeightCat());
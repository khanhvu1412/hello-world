class ElectricLamp {
    constructor(status) {
        this.status = status;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    getStatus() {
        return this.status;
    }
}

class SwitchButton {
    constructor() {
        this.status = true;
        this.lamp = null;
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOn() {
        this.status = true;
        return this.lamp.turnOn();
    }

    switchOff() {
        this.status = false;
        return this.lamp.turnOff();
    }
}

let lamp = new ElectricLamp()
let sw = new SwitchButton();

sw.connectToLamp(lamp);

for (let i = 0; i < 10; i++) {
    if (sw.status) {
        sw.switchOff();
    } else {
        sw.switchOn();
    }

    console.log(`Lần ${i + 1}: Đèn ${lamp.getStatus() ? "Bật" : "Tắt"}`);
}
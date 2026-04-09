class Remote {
    constructor(id, tv) {
        this.id = id;
        this.tv = tv;
    }

    setChannel(channel) {
        this.tv.setChannelTV(channel);
    }

    setVolume(volume) {
        this.tv.setVolume(volume);
    }

    turnOffTV() {
        this.tv.turnOff();
    }
}

class Tivi {
    constructor(channel, volume) {
        this.channel = channel;
        this.volume = volume;
        this.status = false;
    }

    turnOn() {
        this.status = true;
        console.log("TV đã bật");
    }

    turnOff() {
        this.status = false;
        console.log("TV đã tắt.")
    }

    getStatus() {
        return this.status;
    }

    getChannelTV() {
        return this.channel;
    }

    getVolumeTV() {
        return this.volume;
    }

    setChannelTV(new_channel) {
        if (this.status) {
            this.channel = new_channel;
        } else {
            console.log("TV đang tắt, không đổi kênh được.");
        }
    }

    setVolume(new_volume) {
        if (this.status) {
            this.volume = new_volume;
        } else {
            console.log("TV đang tắt, không chỉnh âm lượng được.");
        }
    }
}


let Samsung = new Tivi(1, 10);
let remote = new Remote(1, Samsung);


Samsung.turnOn();

Samsung.setChannelTV(7);
console.log("Kênh: " + Samsung.getVolumeTV());

remote.setChannel(3);
console.log("Kênh: " + Samsung.getChannelTV());


remote.setVolume(Samsung.getVolumeTV() + 2);
console.log("Âm lượng: " + Samsung.getChannelTV());

remote.turnOffTV();
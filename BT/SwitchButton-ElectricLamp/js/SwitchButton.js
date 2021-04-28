class SwitchButton {
    constructor() {
        this.status = false;
    }
    connectToLamp(lamp) {
        this.lamp = lamp
    }
    switchOff() {
        // this.status = false;
        this.lamp.turnOff();
        console.log('Light off')
    }
    switchOn() {
        // this.status = true;
        this.lamp.turnOn();
        console.log('Light on')
    }
}
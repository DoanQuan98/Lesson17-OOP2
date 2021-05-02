class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    talk() {
        alert('meo meo');
    }

    catch(rat) {
        return this.speed >= rat.speed;
    }


    eat(rat) {
        if (this.catch(rat)) {
            if (rat.status === true) {
                this.weight += rat.weight;
            }
        }
    }
}

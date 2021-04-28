class Human {
    constructor(name,weight,gender) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        // if (this.gender === true) {
        //     return true;
        // } else {
        //     return false;
        // }
        return this.gender === true;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(apple) {
        return apple.isEmpty();
    }

    eat(apple) {
        if(!this.checkApple(apple)) {
            apple.decrease();
            this.weight++;
        }
    }

    say(message) {
        console.log('Hello ' + this.name)
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }


}
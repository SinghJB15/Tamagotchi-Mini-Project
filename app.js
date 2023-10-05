class Tamagotchi {
    constructor(name){
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }

    increaseAge() {
        this.age++;
    }

    increaseHunger() {
        if(this.hunger < 10) {
            this.hunger++;
        }
    }

    increaseSleepiness() {
        if(this.sleepiness < 10) {
            this.sleepiness++;
        }
    }

    increaseBoredom() {
        if(this.boredom < 10) {
            this.boredom++
        }
    }

    feed() {
        if(this.feed > 0) {
            this.feed--;
        }
    }

    sleep() {
        if(this.sleepiness > 0) {
            this.sleepiness--;
        }
    }

    play() {
        if(this.boredom > 0) {
            this.boredom--;
        }
    }

    checkMetric() {
        //Condition statement to check when the game will end
        if(this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10) {
            alert('game over!')
        }
    }

    updateUI() {
        document.querySelector("#hunger").innerHTML = `Hunger: ${this.hunger}`;
        document.querySelector("#sleepiness").innerHTML = `Sleepiness: ${this.sleepiness}`;
        document.querySelector("#boredom").innerHTML = `Boredom: ${this.boredom}`;
        document.querySelector("#age").innerHTML = `Age: ${this.age}`;
    }
}
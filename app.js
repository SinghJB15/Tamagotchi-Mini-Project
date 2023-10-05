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
}
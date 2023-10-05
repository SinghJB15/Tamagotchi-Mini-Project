class Tamagotchi {
    constructor() {
        this.name = null;
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

    startGame() {
        //Checks if the tamagotchi has a name first before starting the game
        if(this.name === null) {
            let petName = prompt("What would you like to name Bruce Wayne's pet?");
            this.name = petName;
            document.querySelector("#name").innerHTML = petName;
            //Once user inputs a pet name, then runIntervals function will run to update metric values
            this.runIntervals();
        } else {
            alert("You must input a name in order to play the game")
        }
    }

    runIntervals() {
        //Method to increment all metric values after a few seconds
        const intervals = setInterval(() => {
            this.increaseHunger();
            this.increaseSleepiness();
            this.increaseBoredom();
            //After metric values get incremented we will run checkMetric() to check if the game will end
            this.checkMetric();
            //Update the UI each time the metric values get incremented
            this.updateUI();
        }, 2000)
    }
}

const myPet = new Tamagotchi;

document.querySelector("#start-game").addEventListener("click", () => {
    myPet.startGame();
})


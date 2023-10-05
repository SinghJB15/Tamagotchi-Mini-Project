class Tamagotchi {
  constructor() {
    this.name = null;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
    this.ageInterval = null;
    this.metricIntervals = null;
  }

  increaseAge() {
    this.age++;
    this.updateUI();
  }

  increaseHunger() {
    if (this.hunger < 10) {
      this.hunger++;
    }
  }

  increaseSleepiness() {
    if (this.sleepiness < 10) {
      this.sleepiness++;
    }
  }

  increaseBoredom() {
    if (this.boredom < 10) {
      this.boredom++;
    }
  }

  feed() {
    if (this.hunger > 0) {
      this.hunger--;
    }
  }

  sleep() {
    if (this.sleepiness > 0) {
      this.sleepiness--;
    }
  }

  play() {
    if (this.boredom > 0) {
      this.boredom--;
    }
  }

  //   checkMetric() {
  //     //Condition statement to check when the game will end
  //     if (this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10) {
  //       alert("game over!");
  //       clearInterval(this.ageInterval);
  //       clearInterval(this.metricIntervals);
  //       this.restartGame();
  //     }
  //   }

  checkMetric() {
    if (this.hunger === 10) {
      alert("Game over! The pet has died of starvation!");
      clearInterval(this.ageInterval);
      clearInterval(this.metricIntervals);
      this.restartGame();
    }
    if (this.sleepiness === 10) {
      alert("Game over! The pet has died from lack of sleep!");
      clearInterval(this.ageInterval);
      clearInterval(this.metricIntervals);
      this.restartGame();
    }
    if (this.boredom === 10) {
      alert("Game Over! The has died from boredom!");
      clearInterval(this.ageInterval);
      clearInterval(this.metricIntervals);
      this.restartGame();
    }
  }

  updateUI() {
    document.querySelector("#hunger").innerHTML = `Hunger: ${this.hunger}`;
    document.querySelector(
      "#sleepiness"
    ).innerHTML = `Sleepiness: ${this.sleepiness}`;
    document.querySelector("#boredom").innerHTML = `Boredom: ${this.boredom}`;
    document.querySelector("#age").innerHTML = `Age: ${this.age}`;
  }

  startGame() {
    //Checks if the tamagotchi has a name first before starting the game
    if (this.name === null) {
      let petName = prompt("What would you like to name Bruce Wayne's pet?");
      //Check if valid name is provided to petName
      if (petName) {
        this.name = petName;
        document.querySelector("#name").innerHTML = petName;
        //Once user inputs a pet name, then runIntervals function will run to update metric values
        this.runIntervals();
        //Disable the startGame button
        let startGameButton = document.querySelector("#start-game");
        startGameButton.disabled = true;
      } else {
        alert("You must input a name in order to play the game");
      }
    }
  }

  runIntervals() {
    //Increment age after x seconds
    this.ageInterval = setInterval(() => {
      this.increaseAge();
    }, 2000);

    //Increment all metric values after x seconds
    this.metricIntervals = setInterval(() => {
      this.increaseHunger();
      this.increaseSleepiness();
      this.increaseBoredom();
      //After metric values get incremented we will run checkMetric() to check if the game will end
      this.checkMetric();
      //Update the UI each time the metric values get incremented
      this.updateUI();
    }, 2500);
  }

  restartGame() {
    this.name = null;
    this.age = 0;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    //After the metrics reset to 0 we want to update the UI
    this.updateUI();
    //We want to re-enable the start game button after the game restarts
    document.querySelector("#start-game").disabled = false;
  }
}

const myPet = new Tamagotchi();

//Event Listeners
//Event listener to start game
document.querySelector("#start-game").addEventListener("click", () => {
  myPet.startGame();
});

//Event listener to feed pet
document.querySelector("#feed").addEventListener("click", () => {
  myPet.feed();
  //Each time user clicks feed button, the UI will get updated immediatley
  myPet.updateUI();
});

//Event listener to put pet to sleep
document.querySelector("#sleep").addEventListener("click", () => {
  myPet.sleep();
  //Each time user clicks sleep button, the UI will get updated immediatley
  myPet.updateUI();
});

//Event listern to play with pet
document.querySelector("#play").addEventListener("click", () => {
  myPet.play();
  //Each time user clicks play button, the UI will get updated immediatley
  myPet.updateUI();
});

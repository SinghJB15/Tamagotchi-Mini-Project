class Tamagotchi {
  constructor() {
    //Basic attributes of the Tamagotchi
    this.name = null;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
    //Tamagotchi starts as a baby
    this.currentStage = "baby";
    //Interval for aging
    this.ageInterval = null;
    //Interval for increasing metrics
    this.metricIntervals = null;
  }

  increaseAge() {
    //Increment the Tamagotchi's age by one
    this.age++;
    //Update the user interface to show the updated age
    this.updateUI();
    //This function will check the age of the pet and update the image of the pet accordingly
    this.updateImg();
  }

  increaseHunger() {
    //Increment hunger by 1 and making sure it does not exceed 10
    if (this.hunger < 10) {
      this.hunger++;
    }
  }

  increaseSleepiness() {
    //Increment sleepiness by 1 and making sure it does not exceed 10
    if (this.sleepiness < 10) {
      this.sleepiness++;
    }
  }

  increaseBoredom() {
    //Increment boredom by 1 and making sure it does not exceed 10
    if (this.boredom < 10) {
      this.boredom++;
    }
  }

  feed() {
    //Decrease hunger level by 1 and making sure it does not go below 0
    if (this.hunger > 0) {
      this.hunger--;
    }
  }

  sleep() {
    //
    if (this.sleepiness > 0) {
      this.sleepiness--;
    }
    //Change image to night time image when sleep function is called
    let bodyTag = document.querySelector("body");
    bodyTag.style.backgroundImage = 'url("../images/night-time.jpg")';
    //Adding the night-mode class
    bodyTag.classList.add("night-mode");

    //After 2500ms, this function will run to revert image back to day time and original colors
    setTimeout(() => {
      bodyTag.style.backgroundImage = 'url("../images/day-time.jpg")';
      //Removing the night-mode class
      bodyTag.classList.remove("night-mode");
    }, 2000);
  }

  play() {
    //Decrease boredom level by 1 and making sure it does not go below 0
    if (this.boredom > 0) {
      this.boredom--;
    }
  }

  checkMetric() {
    //Check if any of the metrics equal 10
    //If any of the metrics equal 10, a "Game Over" alert is displayed, intervals are cleared, and game is restarted
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
    //Updating the user interface with the updated metric values
    document.querySelector("#hunger").innerHTML = `Hunger: ${this.hunger}`;
    document.querySelector("#sleepiness").innerHTML = `Sleepiness: ${this.sleepiness}`;
    document.querySelector("#boredom").innerHTML = `Boredom: ${this.boredom}`;
    document.querySelector("#age").innerHTML = `Age: ${this.age}`;
  }

  startGame() {
    //Checks if the tamagotchi has a name before proceeding with the game
    if (this.name === null) {
      //Prompt user to provide a name for the Tamagotchi
      let petName = prompt("What would you like to name your virtual pet?");
      //Check if valid name is provided to petName
      if (petName) {
        //Assign provided name to tamagotchi and update it in the HTML page
        this.name = petName;
        document.querySelector("#name").innerHTML = petName;
        //This function will run the age and metric intervals to increase age and metric values
        this.runIntervals();
        //Disable the startGame button to prevent re-initializing the game
        let startGameButton = document.querySelector("#start-game");
        startGameButton.disabled = true;
      } else {
        //Notify the user that they must input a name in order to play the game
        alert("You must input a name in order to play the game");
      }
    }
  }

  runIntervals() {
    //Increment age after 2000 milliseconds (2 seconds)
    this.ageInterval = setInterval(() => {
      this.increaseAge();
    }, 2000);

    //Increment all metric values after 3000 milliseconds (3 seconds)
    this.metricIntervals = setInterval(() => {
      this.increaseHunger();
      this.increaseSleepiness();
      this.increaseBoredom();
      //After metric values get incremented checkMetric() will run to check status of game
      this.checkMetric();
      //Update the user interface each time the metric values get incremented
      this.updateUI();
    }, 3000);
  }

  updateImg() {
    //Select the Tamagotchi image element
    let tamImage = document.querySelector("#tamagotchi-image");
    //Check the age of the Tamagotchi to determine which stage it is in and update the image accordingly
    if (this.age < 6) {
      //If age is less than 6, the tamagotchi is in the "baby" stage
      tamImage.src = "../images/baby-tamagotchi.png";
    } else if (this.age < 13) {
      //If age is between 6 and 12, the Tamagotchi evolves to the "child" stage
      tamImage.src = "../images/child-tamagotchi.png";
      //If the current stage is not "child", update it and alert the user
      if(this.currentStage !== "child") {
        this.currentStage = "child";
        alert(`Your tamagotchi has evolved to: ${this.currentStage}`);
      }
    } else if (this.age < 20) {
      //If age is between 13 and 19, the Tamagotchi evolves to the "teenager" stage
      tamImage.src = "../images/teenager-tamagotchi.png";
      if(this.currentStage !== "teenager") {
        //If the current stage is not "teenager", update it and alert the user
        this.currentStage = "teenager";
        alert(`Your tamagotchi has evolved to: ${this.currentStage}`);
      }
    } else if (this.age >= 20) {
      //If age is 20 or more, the Tamagotchi evolves to the "adult" stage
      tamImage.src = "../images/adult-tamagotchi.png";
      if(this.currentStage !== "adult") {
        //If the current stage is not "adult", update it and alert the user
        this.currentStage = "adult";
        alert(`Your tamagotchi has evolved to: ${this.currentStage}`);
      }
    }
  }


  restartGame() {
    //Reset all the metrics
    this.name = null;
    this.age = 0;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    //After the metrics reset to 0, update the user interface
    this.updateUI();
    //Re-enable the start game button after the game restarts
    document.querySelector("#start-game").disabled = false;
    //Change image back to baby image
    document.querySelector("#tamagotchi-image").src = "../images/baby-tamagotchi.png";
  }
}

//Instantiate a new Tamagotchi object named mypet
const myPet = new Tamagotchi();

//Event Listeners
//Event listener to start game
document.querySelector("#start-game").addEventListener("click", () => {
  myPet.startGame();
});

//Event listener to feed pet
document.querySelector("#feed").addEventListener("click", () => {
  myPet.feed();
  //Each time user clicks feed button, the user interface will get updated immediatley
  myPet.updateUI();
});

//Event listener to put pet to sleep
document.querySelector("#sleep").addEventListener("click", () => {
  myPet.sleep();
  //Each time user clicks sleep button, the user interface will get updated immediatley
  myPet.updateUI();
});

//Event listener to play with pet
document.querySelector("#play").addEventListener("click", () => {
  myPet.play();
  //Each time user clicks play button, the user interface will get updated immediatley
  myPet.updateUI();
});

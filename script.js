const message = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const inputGuessBox = document.querySelector(".guess");
const secretNumberBox = document.querySelector(".number");
const scoreDOM = document.querySelector(".score");
const highScoreDOM = document.querySelector(".highscore");
const bodyElement = document.querySelector("body");
const headerElement = document.querySelector("header");

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = (msg) => (message.textContent = msg);

const displayScore = (score) => {
  scoreDOM.textContent = score;
};

btnCheck.addEventListener("click", function () {
  const guessInput = Number(inputGuessBox.value);

  if (guessInput === secretNumber) {
    displayMessage("Correct Number!");
    btnCheck.disabled = true;
    displayScore(score);
    bodyElement.style.backgroundColor = "#48753b";
    secretNumberBox.style.width = "25rem";
    secretNumberBox.style.fontSize = "8rem";
    secretNumberBox.textContent = secretNumber;
    headerElement.style.borderBottomColor = "#48753b";
    if (score > highscore) {
      highscore = score;
      highScoreDOM.textContent = highscore;
    }
  }
  // When player's guess is wrong (input value too high/too low)
  else if (guessInput !== secretNumber && guessInput > 0 && guessInput < 20) {
    if (score > 1) {
      displayMessage(
        `Number is too ${guessInput > secretNumber ? "high" : "low"}!`
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("Game over! Try again.");
      scoreDOM.textContent = "0";
    }
  } else {
    displayMessage("Please insert a number between 1 and 20.");
  }
});

const restoreToDefault = () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  bodyElement.style.backgroundColor = "rgb(50, 46, 88)";
  headerElement.style.borderBottomColor = "white";
  inputGuessBox.value = "";
  displayScore(score);
  secretNumberBox.style.width = "15rem";
  secretNumberBox.style.fontSize = "6rem";
  secretNumberBox.textContent = "?";
  console.log(secretNumber);
  btnCheck.disabled = false;
};

btnAgain.addEventListener("click", restoreToDefault);

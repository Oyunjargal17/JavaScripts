const rockButton = document.getElementById("main-rock");
const paperButton = document.getElementById("main-paper");
const scissorsButton = document.getElementById("main-scissors");
const botScore = document.getElementById("bot-score");
const userScore = document.getElementById("user-score");
const userWinWin = document.getElementById("user-win");
const botWinWin = document.getElementById("bot-win");
const resetBtn = document.getElementById("reset");
const vsImage = document.querySelector(".center img");

let humanScore = 0;
let computerScore = 0;
const turn = (choice) => {
  //   console.log(choice);

  const computerChoice = computerChoicer();
  //   console.log(choice, computerChoice);
  if (choice === "rock" && computerChoice === "scissors") {
    // console.log("user Win");
    humanScore++;
    userScore.innerText = humanScore;
  }
  if (choice === "scissors" && computerChoice === "scissors") {
    // console.log("user Win");
    humanScore++;
    userScore.innerText = humanScore;
  }
  if (choice === "paper" && computerChoice === "rock") {
    // console.log("user Win");
    humanScore++;
    userScore.innerText = humanScore;
  }
  if (computerChoice === "rock" && choice === "scissors") {
    // console.log("computer Win");
    computerScore++;
    botScore.innerHTML = computerScore;
  }
  if (computerChoice === "scissors" && choice === "paper") {
    // console.log("computer Win");
    computerScore++;
    botScore.innerHTML = computerScore;
  }
  if (computerChoice === "paper" && choice === "rock") {
    // console.log("computer Win");
    computerScore++;
    botScore.innerHTML = computerScore;
  }
  console.log(computerScore);
  console.log(humanScore);
  if (computerScore === 5) {
    botWinWin.innerHTML = "COMPUTER WON! 🎉";
    resetBtn.style.display = "block";
    vsImage.style.display = "none";
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
  }
  if (humanScore === 5) {
    userWinWin.innerHTML = "YOU WON! 🎉 ";
    resetBtn.style.display = "block";
    vsImage.style.display = "none";
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
  }
};
const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  userWinWin.innerHTML = "";
  botWinWin.innerHTML = "";
  resetBtn.style.display = "none";
  userScore.innerHTML = humanScore;
  botScore.innerHTML = computerScore;
  vsImage.style.display = "block";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  //   console.log(humanScore);
};
window.resetGame = resetGame;
const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};

const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const botScore = document.getElementById("bot-score");
const userScore = document.getElementById("user-score");
const userWinWin = document.getElementById("user-win");
const botWinWin = document.getElementById("bot-win");
const resetBtn = document.getElementById("reset");

let humanScore = 0;
let computerScore = 0;
const turn = (choice) => {
  console.log(choice);

  const computerChoice = computerChoicer();
  console.log(choice, computerChoice);
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
    botWinWin.innerHTML = "Game over: Computer Win";
    reset.style.display = "block";
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
  }
  if (humanScore === 5) {
    userWinWin.innerHTML = "Game over: Human Win";
    reset.style.display = "block";
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
  }
};
const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  reset.style.display = "none";
  userScore.innerHTML = humanScore;
  botScore.innerHTML = computerScore;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  //   console.log(humanScore);
};
const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};

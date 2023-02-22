const playerChoice = prompt("Please enter your choice: ");
const computerChoice = getComputerChoice();

function getComputerChoice() {
  let no = Math.floor(Math.random() * 3 + 1);
  if (no === 1) {
    return "rock";
  } else if (no === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(pc, cc) {
  if (pc === cc) {
    return "Draw";
  }

  if (cc === "rock") {
    if (pc === "scissor") {
      return "computer";
    } else {
      return "player";
    }
  }
  if (cc === "paper") {
    if (pc === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
  if (cc === "scissor") {
    if (pc === "rock") {
      return "player";
    } else {
      return "computer";
    }
  }
}

console.log(playRound(playerChoice, computerChoice));

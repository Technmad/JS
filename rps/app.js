//let playerSelection = prompt("Your Choice");

let computerSelection = getComputerChoice();

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
}

console.log(computerSelection);

// create an array of possible choices
const playChoice = [ 'rock', 'paper', 'scissors' ];

// create function for computer to randomly return a choice from the array
function computerPlay() {
  return playChoice[Math.floor(Math.random() * 3)];
}

// create a function for user to play either rock, paper, or scissors
const playerSelection = prompt('Choose either rock, paper, or scissors');
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log("It's a tie!");
  }
  else if (
    (playerSelection.toLowerCase() === 'rock' &&
      computerSelection.toLowerCase() === 'scissors') ||
    (playerSelection.toLowerCase() === 'paper' &&
      computerSelection.toLowerCase() === 'rock') ||
    (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection.toLowerCase() === 'paper')
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
  else {
    console.log(
      `You Lose! ${playerSelection.toUpperCase()} loses to ${computerSelection.toUpperCase()}`
    );
  }
}
playRound(playerSelection, computerSelection);

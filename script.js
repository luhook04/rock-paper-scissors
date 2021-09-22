// initialize scores
let userScore = 0;
let computerScore = 0;

// create an array of possible choices
const playChoice = [ 'rock', 'paper', 'scissors' ];

// create function for computer to randomly return a choice from the array
function computerPlay() {
  return playChoice[Math.floor(Math.random() * 3)];
}

// create a function for user to play a round of rock paper scissors
const playerSelection = prompt('Choose either rock, paper, or scissors');
const computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log("It's a tie!");
    console.log(`Your score: ${userScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }
  else if (
    (playerSelection.toLowerCase() === 'rock' &&
      computerSelection.toLowerCase() === 'scissors') ||
    (playerSelection.toLowerCase() === 'paper' &&
      computerSelection.toLowerCase() === 'rock') ||
    (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection.toLowerCase() === 'paper')
  ) {
    userScore += 1;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    console.log(`Your score: ${userScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }
  else {
    computerScore += 1;
    console.log(
      `You Lose! ${playerSelection.toUpperCase()} loses to ${computerSelection.toUpperCase()}`
    );
    console.log(`Your score: ${userScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }
}
playRound(playerSelection, computerSelection);

function game() {}

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
function playRound(playerSelection, computerSelection) {
  if (playerSelection == null) return;
  else if (
    playerSelection.toLowerCase() !== 'rock' &&
    playerSelection.toLowerCase() !== 'paper' &&
    playerSelection.toLowerCase() !== 'scissors'
  ) {
    console.log(`Error...You must enter rock, paper, or scissors`);
  }
  else if (
    playerSelection.toLowerCase() === computerSelection.toLowerCase()
  ) {
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

// create function that plays a best of five and determines winner
function game() {
  const computerSelection = computerPlay();
  const playerSelection = prompt('Choose either rock, paper, or scissors');
  playRound(playerSelection, computerSelection);
}
if (userScore > computerScore) {
  console.log(`You win!!!`);
  console.log(
    `Final Score is User: ${userScore} Computer: ${computerScore}`
  );
}
else {
  console.log(`You win!!!`);
  console.log(
    `Final Score is User: ${userScore} Computer: ${computerScore}`
  );
}

game();

// references for the buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

//

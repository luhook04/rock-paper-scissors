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
    playerSelection !== 'rock' &&
    playerSelection !== 'paper' &&
    playerSelection !== 'scissors'
  ) {
    console.log(`Error...You must enter rock, paper, or scissors`);
  }
  else if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    console.log(`Your score: ${userScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    userScore += 1;
    console.log(
      `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
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

// references for the buttons
const buttons = document.querySelectorAll('button');

// for each loop that adds event listener for each button
// then takes the text of the button and uses it as a paramter for
// calling playRound()
buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    let playerSelection = e.target.textContent.toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });
});

// rockBtn.addEventListener('click', function(e) {});

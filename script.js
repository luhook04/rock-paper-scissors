// initialize scores
let userScore = 0;
let computerScore = 0;

// create an array of possible choices
const playChoice = [ 'rock', 'paper', 'scissors' ];

// create function for computer to randomly return a choice from the array
function computerPlay() {
  return playChoice[Math.floor(Math.random() * 3)];
}

let p = document.createElement('p');
let div = document.querySelector('div');
// create a function for user to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  let message;
  div.innerHTML = '';

  if (playerSelection === computerSelection) {
    message = `It's a tie!
    Your score: ${userScore} 
    Computer's score: ${computerScore}`;
    p.textContent = message;
    div.appendChild(p);
  }
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    userScore += 1;
    message = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}
    Your score: ${userScore}
    Computer's score: ${computerScore}`;
    p.textContent = message;
    div.appendChild(p);
  }
  else {
    computerScore += 1;
    message = `You Lose! ${playerSelection.toUpperCase()} loses to ${computerSelection.toUpperCase()}
    Your score: ${userScore}
    Computer's score: ${computerScore}`;
    p.textContent = message;
    div.appendChild(p);
  }
  checkWinner(userScore, computerScore);
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

// function to check if someone has won the game
function checkWinner(userScore, computerScore) {
  if (userScore === 5) {
    p.textContent = `CONGRATULATIONS!!! YOU WIN!!! Your score: ${userScore} Computer's Score: ${computerScore}`;
    div.appendChild(p);
    resetScore();
  }
  else if (computerScore === 5) {
    p.textContent = `YOU LOSE! Your score: ${userScore} Computer's Score: ${computerScore}`;
    div.appendChild(p);
    resetScore();
  }
  else return;
}

// function to reset the score once someone wins
function resetScore() {
  userScore = 0;
  computerScore = 0;
}

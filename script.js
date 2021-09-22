// create an array of possible choices
const playChoice = [ 'rock', 'paper', 'scissors' ];

// create function for computer to randomly return a choice from the array
function computerPlay() {
  computerChoice = playChoice[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
}

// create a function for user to play either rock, paper, or scissors

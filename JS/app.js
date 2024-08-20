// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player
// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors']
/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector('#result-display')
/*-------------------------------- Functions --------------------------------*/
const render = () => {
  resultDisplayEl.textContent =msg;
}

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
}

const compare = () => {
  if(playerChoice === computerChoice){
    msg = 'You tied!';
  } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
    msg = 'You won!';
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
    msg = 'You won!';
  } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
    msg = 'You won!';
  } else {
    msg = 'You Lose!';
  }
}

const createMessage = () => {
  msg = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`
}

const getPlayerChoice = (event) => {
  playerChoice = event.target.id;
}

const init =() => {
  playerChoice = null;
  computerChoice = null;
  msg = '';
  render();
}

const play = (event)=>{
  getPlayerChoice(event);
  getComputerChoice();
  compare();
  createMessage();
  render();
}



/*----------------------------- Event Listeners -----------------------------*/
document.querySelectorAll('.playerChoice').forEach(function (button){
  button.addEventListener('click', play)
})

document.getElementById('play-again').addEventListener('click', init)
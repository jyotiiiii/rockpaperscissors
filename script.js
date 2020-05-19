/*OPTION THREE – Rock, Paper, Scissors:
A need has been identified for a function that recreates the classic 
game “Rock Paper Scissors” for use by BBC Bitesize. This is a simple 
game with 4 possible outcomes (including tie; the others are 
    rock beats scissors; 
    paper beats rock and 
    scissors beats paper).
The function needs to be a computer player that selects one of the choices 
at random.
The input to the function would be the players choice as a string 
(rock, paper or scissors) and the response needs to be a string of the 
computers choice and who won – player/ computer.
Example: when passed the input string “rock”
The output string is (possibly) “I choose paper, I win as paper beats rock”.
*/

// 1 = rock, 2 = scissors, 3 = paper
const RULES = {
  3: 2,
  2: 1,
  1: 3,
};

const COMPUTER_ELEMENTS = {
  1: {
    elementId: '1',
    computerPick: 'Computer chose Rock.',
  },
  2: {
    elementId: '2',
    computerPick: 'Computer chose Paper.',
  },
  3: {
    elementId: '3',
    computerPick: 'Computer chose Scissors.',
  },
};

const PLAYER_ELEMENTS = {
  1: {
    elementId: '4',
    playerPick: 'You chose Rock.',
  },
  2: {
    elementId: '5',
    playerPick: 'You chose Paper.',
  },
  3: {
    elementId: '6',
    playerPick: 'You chose Scissors.',
  },
};

play = (string) => {
  // convert player input to number 1, 2 or 3
  let playerChoice = string.toLowerCase();
  console.log({ playerChoice });
  switch (playerChoice) {
    case 'rock':
      playerChoice = 1;
      break;
    case 'paper':
      playerChoice = 2;
      break;
    case 'scissors':
      playerChoice = 3;
      break;
    default:
      return `Sorry, ${string} is not a valid choice. Please enter rock, scissors or paper`;
  }

  // random computer generated result 1, 2, 3
  const computerChoice = Math.ceil(Math.random() * 3);
  console.log({ computerChoice });

  console.log({ playerChoice });

  const computerElement = COMPUTER_ELEMENTS[computerChoice].elementId;

  const playerElement = PLAYER_ELEMENTS[playerChoice].elementId;

  document.getElementById(playerElement).style.display = 'block';
  document.getElementById(computerElement).style.display = 'block';

  document.getElementById('computer').innerHTML =
    COMPUTER_ELEMENTS[computerChoice].computerPick;
  document.getElementById('player').innerHTML =
    PLAYER_ELEMENTS[playerChoice].playerPick;



  const result = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
      document.getElementById('result').innerHTML = 'Its a tie.';
    } else if (RULES[playerChoice] === computerChoice) {
      document.getElementById('result').innerHTML = 'You win!';
    } else {
      document.getElementById('result').innerHTML = 'Computer wins!';
    }
  };

  result(computerChoice, playerChoice);
};

function veil() {
  document.getElementById('playAgain').innerHTML = '<h6>Play again?</h6>';
  $('.game').hide();
}

function unveil() {
  window.location.reload();
}
function on() {
  document.getElementById('overlay').style.display = 'block';
}
function off() {
  document.getElementById('overlay').style.display = 'none';
}
function bigImg(x) {
  x.style.height = '200px';
  x.style.width = '205px';
}
function normalImg(x) {
  x.style.height = '200px';
  x.style.width = '200px';
}

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerSpock = document.getElementById("playerSpock");
const playerScisors = document.getElementById("playerScisors");
const playerLizard = document.getElementById("playerLizard");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerSpock = document.getElementById("computerSpock");
const computerScisors = document.getElementById("computerScisors");
const computerLizard = document.getElementById("computerLizard");


const allGameIcons = document.querySelectorAll(".far");



const choices = {
  rock: { name: "Rock", defeat: ["scissors", "lizard"] },
  paper: { name: "Paper", defeat: ["rock", "spock"] },
  scissors: { name: "Scissors", defeat: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeat: ["scissors", "lizard"] },
  spock: { name: "Spock", defeat: ["scissors", "rock"] },
};

let computerChoice = ''
let playerScoreNumber = ''
let computerScoreNumber = ''

// Reset all selected icon

function resetSelected(){
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected')
    })
}


// Game Reset
function resetAll(){
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber
    computerScoreEl.textContent = computerScoreNumber
    playerChoiceEl.textContent = ''
    computerChoiceEl.textContent = ''
    resultText.textContent = ''
    resetSelected();
}


// Random computer choice

function computerRandomChoice () {
    const computerChoiceNumber = Math.random();
    if(computerChoiceNumber < 0.2) {
        computerChoice = 'rock'
    }else if(computerChoiceNumber <= 0.4) {
        computerChoice = 'paper'
    }else if(computerChoiceNumber <= 0.6) {
        computerChoice = 'scissors'
    }else if (computerChoiceNumber <= 0.8) {
        computerChoice = 'lizard'
    }else {
        computerChoice = 'spock'
    }

    
}

function updateScores (playerChoice) {
    console.log(playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
        resultText.textContent = "It is a tie"
    }else {
        const choice = choices[playerChoice]
        console.log(choice.defeat.indexOf(computerChoice));
        if (choice.defeat.indexOf(computerChoice) > -1) {
            resultText.textContent = 'You Won!!!';
            playerScoreNumber++
            playerScoreEl.textContent = playerScoreNumber
        }else {
            resultText.textContent = 'You lost!'
            computerScoreNumber++
            computerScoreEl.textContent = computerScoreNumber
        }
    }
}

// call function to process turn

function checkResult (playerChoice) {
    resetSelected()
    computerRandomChoice()
    displayComputerChoice()
    updateScores(playerChoice)
}

function select(playerChoice) {
    // console.log(playerChoice);
    checkResult(playerChoice)

    switch (playerChoice) {
      case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock'
      break;
      case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper'
      break;
      case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors'
      break;
      case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard'
      break;
      case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock'
      break;
      default:
        break;
    }
}
function displayComputerChoice () {

    switch (computerChoice) {
      case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock'
      break;
      case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper'
      break;
      case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors'
      break;
      case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard'
      break;
      case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock'
      break;
      default:
        break;
    }
}

//ResetAll game to initial state
resetAll()
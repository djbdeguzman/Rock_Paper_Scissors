// generate the computer choice
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
   return choices[Math.floor(Math.random() * choices.length)];
}


let upperText = prompt('Select your weapon! Rock, Paper or Scissors!'); // prompt to ask for user's selection
let playerSelection = upperText.toUpperCase(); //this converts any case to uppercase
const computerSelection = getComputerChoice(choices).toUpperCase(); // this converts the computer selection to uppercase
let resultText; //the battle result is stored in this variable

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        resultText = "Its a tie!";
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        resultText = "You Win!";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        resultText = "You Win!";
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        resultText = "You Win!";
    }
    else {
        resultText ="You Lose!"
    }
    return resultText;
  }

console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
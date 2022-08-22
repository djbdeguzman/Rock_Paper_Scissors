let userScore = 0;
let compScore = 0;
const userScoreLog = document.querySelector(".playerScore");
const computerScoreLog = document.querySelector(".computerScore");
const result = document.querySelector(".finalScore > p");
const chooseRock = document.getElementById("btn-Rock");
const choosePaper = document.getElementById("btn-Paper");
const chooseScissors = document.getElementById("btn-Scissors");
const resetGameButton = document.getElementById("resetGame");
let playerChoice;

chooseRock.addEventListener('click', () => game("ROCK"));
choosePaper.addEventListener('click', () => game("PAPER"));
chooseScissors.addEventListener('click', () => game("SCISSORS"));

// Player Choice
function game(playerSelection) {
    //playerChoice = playerSelection;
    const computerSelection = getComputerChoice();
    
    //this will call a function based on the result of the comparison between the player and computer choice
    if (playerSelection === computerSelection) {
        draw(playerSelection, computerSelection);
      } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        playerWin(playerSelection, computerSelection);  
      }else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        playerWin(playerSelection, computerSelection);
      }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        playerWin(playerSelection, computerSelection);
      }else{
        computerWin(playerSelection, computerSelection);
      }   

}

// computer random selection
function getComputerChoice() {

const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// if player wins the game, add player score by 1, if user score is equal to 5, show reset game button
function playerWin(playerChoice, computerChoice) {
    userScore++;
    userScoreLog.innerHTML = userScore;
    computerScoreLog.innerHTML = compScore;

    if (userScore < 5){result.innerHTML = `${playerChoice} beats ${computerChoice}. You win!`;
}else if(userScore === 5){
  result.innerHTML="Player win the game";
  showResetButton();

  chooseRock.setAttribute("disabled", 1);
  choosePaper.setAttribute("disabled", 1);
  chooseScissors.setAttribute("disabled", 1);
}; 
}

function computerWin(playerChoice, computerChoice) {
    compScore++;
    userScoreLog.innerHTML = userScore;
    computerScoreLog.innerHTML = compScore;

    if (compScore < 5){result.innerHTML = `${computerChoice} beats ${playerChoice}. You lose!`;
}else if(compScore === 5){
    result.innerHTML="Computer win the game";
    showResetButton();

  chooseRock.setAttribute("disabled", 1);
  choosePaper.setAttribute("disabled", 1);
  chooseScissors.setAttribute("disabled", 1);
}; 
}

function draw() {
    userScoreLog.innerHTML = userScore;
    computerScoreLog.innerHTML = compScore;
    result.innerHTML = `It\'s a tie!`;
}


//show reset game button
function showResetButton(){
    if (resetGameButton.style.display === "none") {
        resetGameButton.style.display = "block";
    } else {
        resetGameButton.style.display = "none";
    }
  }

  // Button to reset the whole game
function resetGame() {
    userScore = 0;
    compScore = 0;
    userScoreLog.innerHTML = userScore;
    computerScoreLog.innerHTML = compScore;
    result.innerHTML = ``;
    chooseRock.removeAttribute("disabled");  
    choosePaper.removeAttribute("disabled");  
    chooseScissors.removeAttribute("disabled");
    resetGameButton.style.display = "none"
  }
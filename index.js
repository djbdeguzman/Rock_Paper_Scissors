// generate the computer choice
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
   return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice(choices));
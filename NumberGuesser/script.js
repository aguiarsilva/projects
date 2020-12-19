let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Generate the target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

//compare the guesses with the target number and determine the winner
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
 let humanPoint = Math.abs(humanGuess - targetNumber);
 let computerPoint = Math.abs(computerGuess - targetNumber);
 if(humanPoint <= computerPoint) {
   return true;
 } else {
   return false;
 }
};

//update the winner score
const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore +=1;
  } else {
    computerScore+=1;
}
};

//play next round
const advanceRound = () => {
currentRoundNumber +=1;
}

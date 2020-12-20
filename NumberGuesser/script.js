let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if(humanGuess < 0 || humanGuess > 9){
    alert(`This is not a valid number. Please choose a number between 1 and 9!`);
  };
 let humanPoint = getAbsoluteDistance(humanGuess, targetNumber);
 let computerPoint = getAbsoluteDistance(computerGuess, targetNumber);
 if(humanPoint <= computerPoint) {
   return true;
 } else {
   return false;
 }
};

const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore +=1;
  } else {
    computerScore+=1;
}
};

const advanceRound = () => {
currentRoundNumber +=1;
};

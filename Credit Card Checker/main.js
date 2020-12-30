// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = (arr) => {
  //copy and invert the array
  let arrInverted = arr.slice().reverse();
  //loop through array
  for(let i = 0; i < arrInverted.length; i++){
   //double the value of the number in the even indexes
    if(i % 2 != 0){
      arrInverted[i] = arrInverted[i]*2;
    }
      //if number is greater than 9, subtract 9 from it
      if(arrInverted[i] > 9){
        arrInverted[i] -= 9;
      }
  }
  //sum the card numbers
let cardSum = arrInverted.reduce((a, b) => a + b, 0);
//check if the sum is divisible by ten (luhn algorithm) and if yes, return true, else, return false;
if(cardSum % 10 != 0){
  return false;
} else {
  return true;
}
}

console.log(validateCred(valid4));
//create the invalid cards function
const findInvalidCards = array => {
//create a new array to hold the invalid card numbers
  let invalidCards = [];
  //loop through nested array
  for(let i = 0; i < array.length; i++){
    if(validateCred(array[i]) === false){
      invalidCards.push(array[i]);
    }
  }
  return invalidCards;
}
console.log(findInvalidCards(batch));

const idInvalidCardCompanies = (invalidBatch) => {
let companies = [];
// let invalidCards = findInvalidCards(invalidBatch);
 function dedupe(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
 };
  for(let i = 0; i < invalidBatch.length; i++){
    let ic = invalidBatch[i].join('');
    switch (ic[0]){
      case '3':
      ic = 'Amex';
      break;
      case '4':
      ic = 'Visa';
      break;
      case '5':
      ic = 'Mastercard';
      break;
      case '6':
      ic = 'Discover';
      break;
      default:
      ic = 'This company is not listed!'
    }
    companies.push(ic);
  }
  //return array with removed duplicates
  return companies.filter((a, b) => companies.indexOf(a)===b);
 
};

console.log(idInvalidCardCompanies(batch));

//create a function to convert string to array of numbers
 const convertStrToNum = (arr) =>{
  return arr.map(Number);
 }; 
 
const test = ['2', '3', '4', '5', '6'];
console.log(convertStrToNum(test));
console.log(test);
//create a function to convert invalid numbers into valid numbers
const convertInToVal = (inArray) => {
  let convertedArray = inArray;
  convertedArray.pop();
  convertedArray.push(0);
  while(!validateCred(convertedArray)) {
    convertedArray.push(convertedArray.pop() + 1);
  }
  return convertedArray;
}
//tests
//console.log(convertInToVal(invalid1));
//console.log(validateCred(convertInToVal(invalid1)));









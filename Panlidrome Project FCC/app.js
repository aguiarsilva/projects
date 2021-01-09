function palindrome(str) {
    //first remove the punctuation, symbols and whitespaces
  let newStr = str.match(/[^_\W]+/g).join("").toLowerCase();
  //then we need to reverse the string for comparison
  let reversedStr = newStr.split("").reverse().join("");
  //write the comparison to check if the palindrome is true or false.
  if(newStr === reversedStr){
    return true;
  } else {
    return false;
  } 
}



palindrome("eye");
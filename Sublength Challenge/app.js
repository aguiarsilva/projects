const subLength = (str, char) => {
    let newArr = [];
    for (let i = 0; i < str.length; i++){
      if (str[i] === char) newArr.push(i);
      }
      return newArr.length === 2 ? newArr[1] - newArr[0] + 1 : 0;
    }
    
    
    console.log(subLength('Saturday', 'a')); 
    // returns 6
    console.log(subLength('summer', 'm')); // returns 2
    console.log(subLength('digitize', 'i')); // returns 0
    console.log(subLength('cheesecake', 'k')); // returns 0
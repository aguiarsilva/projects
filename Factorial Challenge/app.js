const factorial = (n) => {
    let sum = 1;
      if(n >= 0){
         while(n){
        sum *= n;
        n--;
      }
       return sum;
      } else {
        return `You need to insert a positive number!`
      }
     
    }
  
    console.log(factorial(6));
  console.log(factorial(0));
  console.log(factorial(-1));
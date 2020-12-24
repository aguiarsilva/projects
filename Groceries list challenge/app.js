const groceries = (arr) => {
    if(arr.length > 1){
      let newArr = [];
      arr.forEach((element) => newArr.push(element.item));
      const lastItem = newArr.pop();
      return `${newArr.join(', ')} and ${lastItem}`
    } else {
      return arr[0].item;
    }
  }
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  // returns 'Carrots, Hummus, Pesto and Rigatoni'
   
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
  // returns 'Bread and Butter'

  console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'
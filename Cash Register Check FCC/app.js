//create the variable with an array of objects of the bills and change names and value
const money = [
    {name: "ONE HUNDRED", val: 100.0},
    {name: "TWENTY", val: 20.0},
    {name: "TEN", val: 10.0},
    {name: "FIVE", val: 5.0},
    {name: "ONE", val: 1.0},
    {name: "QUARTER", val: 0.25},
    {name: "DIME", val: 0.10},
    {name: "NICKEL", val: 0.05},
    {name: "PENNY", val: 0.01}
  ];

  function checkCashRegister(price, cash, cid) {
    //create a variable for the change and the response
    let response = { status: null, change: [] }
    let change = cash - price;
  
    //then make cid as object
    let cashier = cid.reduce((acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    }, { total: 0});

    //if the change is exact
  if (cashier.total === change) {
    response.status = "CLOSED";
    response.change = cid;
    return response;
  }

// if funds not enough
  if (cashier.total < change){
    response.status = "INSUFFICIENT_FUNDS";
    return response;
  }


// check the money array with while loop
let change_arr = money.reduce((acc, curr) =>{ let value = 0;
    //loop while money in drawer and greater than change
    while(cashier[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      cashier[curr.name] -= curr.val;
      value += curr.val;
    //round change to nearest hundreth
    change = Math.round(change*100)/100;
    }
    //add money to response if used
    if(value > 0){
      acc.push([curr.name, value]);
    }
    return acc;
    }, []);

      //nothing in change_arr or leftover = insuficient funds
  if(change_arr.length < 1 || change > 0){
    response.status = "INSUFFICIENT_FUNDS";
    return response;
  }
 // return change to customer
 response.status = "OPEN";
 response.change = change_arr;
 return response;
};

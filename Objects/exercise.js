
//exercise to create a function that takes a string as an arguent and returns an object that keeps count of the occurences of each character

/*let word 
let printingCount ={};
function countingChar(string){    
    for(i =0; i<string.length ; i++)
    {
        if(printingCount[string[i]])
            {
                printingCount[string[i]] = printingCount[string[i]] + 1;
            }
            else
            {
                printingCount[string[i]] = 1;
            }
        //printingCount[string[i]] = ((printingCount[string[i]]) ? printingCount[string[i]] : 0) + 1;
    }
    return printingCount;
}
console.log(countingChar('peep'))
*/

//another version
/*
const countChar = function(str) {
    let myObj= {};
    for (let char of str) {  //iterates through each character of the string
        if ( myObj[char] ) {  //if we have a count for the character we can increment
           myObj[char]++ 
        } else {
          myObj[char] = 1 //if we don't have a count we have to create it
        }
    }
    return myObj;
  }  
  
console.log(countChar('peep'))
*/

//redo deno using objects

// const xyz = {
// balAmount : 72.17,
// numberof50bills : 0,
// numberof20bills : 0,
// numberof10bills : 0,
// numberof5bills : 0,
// numberof1bills : 0,
// }
// while (xyz.balAmount > 50){
//     xyz.balAmount = xyz.balAmount - 50;
//      xyz.numberof50bills++;
// }
// while(xyz.balAmount > 20)
// {
//     xyz.balAmount = xyz.balAmount - 20;
//     xyz.numberof20bills++;
// }
// while(xyz.balAmount > 10)
// {
//     xyz.balAmount = xyz.balAmount - 10;
//     xyz.numberof10bills++;
// }
// while(xyz.balAmount > 5)
// {
//      xyz.balAmount = xyz.balAmount - 5
//      xyz.numberof5bills++;
// }
//  while(xyz.balAmount > 1)
// {
//      xyz.balAmount = xyz.balAmount - 1;
//      xyz.numberof1bills++; 
// }
// //  for (let key in xyz){
// //     console.log('value:', xyz[key])
// //}
// //for (let key in xyz){
// //  console.log('xyz.[prop]', xyz[key])
// //}
// console.log('numberof50bills:', xyz.numberof50bills)
// console.log('numberof20bills:', xyz.numberof20bills)
// console.log('numberof10bills:', xyz.numberof10bills)
// console.log('numberof5bills:', xyz.numberof5bills)
// console.log('numberof1bills:', xyz.numberof1bills)
//  //console.log(xyz.numberof50bills)
//  //console.log(xyz.numberof50bills + xyz.numberof20bills + xyz.numberof10bills + xyz.numberof5bills + xyz.numberof1bills)

//another version
/*
const makeChange = function(payment, shirt) {
    let change = payment - shirt;
    change *= 100; //measure in pennies
  
    const cashReceived = {} //properties will be added as needed
    
    while (change > 0) {
  
      if (change > 5000) {
        change -= 5000; 
        if (cashReceived.fifties) {
          cashReceived.fifties++; //if we have a count, increment it
        } else {
          cashReceived.fifties = 1 //otherwise create the property
        }
        
      }
      else if (change > 2000) {
        change -= 2000;
        if (cashReceived.twenties) {
          cashReceived.twenties++;
        } else {
          cashReceived.twenties = 1
        }
      }
      else if (change > 1000) {
        change -= 1000;
        if (cashReceived.tens) {
          cashReceived.tens++;
        } else {
          cashReceived.tens = 1
        }
      }
    
      else if (change > 500) {
        change -= 500;
        if (cashReceived.fives) {
          cashReceived.fives++;
        } else {
          cashReceived.fives = 1
        }
      }
    
      else if (change > 100) {
        change -= 100;
        if (cashReceived.ones) {
          cashReceived.ones++;
        } else {
          cashReceived.ones = 1
        }
      }
    
      else if (change > 25) {
        change -= 25;
        if (cashReceived.fifties) {
          cashReceived.quarters++;
        } else {
          cashReceived.quarters = 1
        }
      }
    
      else if (change > 10) {
        change -= 10;
        if (cashReceived.dimess) {
          cashReceived.dimes++;
        } else {
          cashReceived.dimes = 1
        }
      }
    
      else if (change > 5) {
        change -= 5;
        if (cashReceived.nickels) {
          cashReceived.fifties++;
        } else {
          cashReceived.nickels = 1
        }
      }
    
      else if (change >= 1) {
        change -= 1;
        if (cashReceived.pennies) {
          cashReceived.pennies++;
        } else {
          cashReceived.pennies = 1
        }
      }
  
    }
    return cashReceived;
  }
  
console.log(makeChange(50, 15.83))
*/


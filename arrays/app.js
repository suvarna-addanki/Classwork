// arrays

 //let learners =['abc', '15', 'def']
// console.log(learners)
// console.log(learners[0])
// console.log(learners[1])
// console.log(learners[2])
// learners[1] = 'xyz';
// console.log(learners)

// array inside array
//pop method  (removes  from the end of an array)
//push        (adds to end of an array)
//unshift     (adds to beginning of array)
//shift       (removes from beginning of array)
//spread operator
//let learners2 = ['jade' ,'Rixio', 'Teo']
//let everybody = [...learners, ...learners2]
//console.log(everybody)

//rest parameter will be used in a function when 
//function add(...numbers){
 //   for (let i = 0; i< numbers.length; i++)
  //  c
//}

//exercise 1

// function maxOfTwoNumbers(a,b)
//         {
//             if(a>b){
//                  return a;
//             }else if(b>a){
//                 return b;
//             } else 
//                 return a;
                 
//         }
//         console.log('max of two numbers is' +   maxOfTwoNumbers(1 ,2))

//exercise 2
// const maxOfThree = function(a,b,c){
//     if(a>b && a>c)
//     {
//         return a;
//     }else if (b>c && b>a)
//     {
//         return b;
//     }else
//         return c;
        
     
// }
// console.log('max of three numbers is' + maxOfThree(7,8,9))


//exercise 3 to check vowel or consonant using array and if else

let vowels =['a','e','i','o','u']
let any;
const isCharAVowel = function(any)
    {
    if ((any == vowels[0])|| (any == vowels[1]) || (any == vowels[2]) || (any == vowels[3])
            || (any == vowels[4]))
       { 
            return true ;
       }
    else
        {
            return false; 
        }
    
    }
    console.log(isCharAVowel('A'))


// exercise 3 to check vowel or consonant using arrays, if/else and .include method    
//     let vowels = ['a','e','i','o','u']
//     let letter;
//     function isCharAVowel(letter){

//      if (vowels.includes(letter)){
//         return true;
//      } else{
//         return false;
//      }
//     }

// console.log(isCharAVowel('i'))

//exercise 4 that returns sum of array
/*let numbersToBeAdded = [2, 4, 5];
let result;
const sumArray = function(numbersToBeAdded)
    {   
        result = numbersToBeAdded[0] + numbersToBeAdded[1] + numbersToBeAdded[2]
        console.log(result);
        return result;
    }
sumArray(numbersToBeAdded);
    
//console.log(result);
*/

//exercise 5 that returns product of the array elements
/*
let multiplyArray = [4,5,6]
let product;
function numbersToBeMultiplied (multiplyArray){
   product = multiplyArray[0] * multiplyArray[1] * multiplyArray[2];
   console.log(product);
   return product;
}
numbersToBeMultiplied(multiplyArray)
*/

//exercise 6 returns the no.of arguments passed to the function when called(you can also  use  rest parameters to pass multiple parameters at a time)
/*let numArgs = function(parameter1, parameter2){
    let count = arguments.length
    console.log(count);
    return count;
}
numArgs(5,6,7,8)
*/

//exercise 7 
//to reverse a string
/*
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('Suvarna'))
*/

//reverse string using builtin methods
/*
function reverseString(str) {

// return a new array of strings
const arrayStrings = str.split("");
   
 //reverse the new created array elements
const reverseArray = arrayStrings.reverse();
 
// join all elements of the array into a string
const joinArray = reverseArray.join("");
    
// return the reversed string
return joinArray;
}
console.log(reverseString('Bottle'))
*/

//exercise 8 to return the length of the longest string(takes array as an argument)
/*
function findLengthOfLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLengthOfLongestWord("Excited for next week!"))
  */
 function longestStringInArray(stringArray){
    let highest = 0;
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i].length>highest){
            highest = stringArray[i].length
        }
    }
    return highest
 }
 console.log(longestStringInArray(['sun', 'moon', 'neptune']))

//exercise 9 that takes an array of strings and ar

//function stringsLongerThan(arr, number){
  //  let number = 
    //for (let i = 0; i <arr.length; i++)
//}







        
    
    
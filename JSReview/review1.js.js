//SECTION 1: VARIABLES & DATATYPES

//Q. how do we assign a value to a variable
//A. A value is assigned with the assignment operator(=) using var,let,const ex: let a = 1;

//2Q.How do we change the value of a variable
//2A. We can change the value (let a = 2;) again with the assignment operator(=). but you cannot reassign/change a const variable

//3Q. how do we assign an existing variable to a new variable
//3A. let newVar = oldVar;

//4Q.Remind me what are declare,assign and define?
//4A. Declare:   let x;  ->a variable is created
//    Assign:    x = 10;  ->a vlue is assigned to the variable
//    Define:    let x = 10;  ->does both at the same time

//5Q.What is pseudocoding and why should we do it?
//5A.a detailed yet readable description of what a computer program or algorithm must do, expressed in a formally-styled natural language rather than in a programming language. 
//     Pseudocode is used as a detailed step in the process of developing a program.
//     We should do that because Pseudocode helps you plan out your app before you write it. 
//     It helps you create algorithms in a format that is easier to read than code syntax.


// 6.What percentage of time should be spent thinking about how you are going to solve a problem vs actually typing in code to solve it?
// It all depends on the complexcity of the problem. Some require lot of time planning and some don't.   

//B.STRINGS

//1.let firstVariable;
//2.firstVariable = ('Hello World')
//3.firstVariable = 10;
// let secondVariable = firstvariable
//secondVariable = 'Wecome';
//FirstVariable value is Hello World
//let yourName = 'Suvarna'
//console.log('Hello, my name is ' + yourName)


//C:BOOLEANS
// const a =4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin'

// console.log(a < b)
// console.log(c > d)
// console.log('Name' ===  'Name')
// //for the next two use only && OR ||
// console.log(true|| false)
// console.log(false && false && false && false && false || true)
// console.log(false == false)
// console.log(e == 'Kevin')
// console.log(a + b == c)
// console.log(a*a == d)
// console.log(48 == '48')

//D.The Farm

//  let animal;
// animal = 'cow'
// if(animal == 'cow')
// {
//     console.log('mooooo')
// }else
//     console.log('Hey! You are not a cow')

//E. Driver's Ed
/*let personAge = 18;
if(personAge >= 16){
    console.log('Here are the keys!')
}else{
    console.log('Sorry,you are too young!')
}
*/

//II. LOOPS:

//A. The Basics
//1. write a loop that will print out all the numbers fron 0 to 10,inclusive
/*
for(let i = 0; i <= 10; i++){
    console.log(i)
} 
*/

//2.write a for loop that prints out all numbers from 10 upto and including 400
//for(let j = 10;j < 401; j++)
//console.log(j)

//3.write a loop that prints out every third number starting with 12 and no going higher than 4000
//for(let k = 12; k < 4000; k+=3)
//  console.log(k)

//B:GET EVEN
//print out even no.s between 1 to 100 and add message next to the even no.
/*
for(let n = 1; n < 101; n++){
    if(n % 2 == 0){
        console.log(n + "<-- is an even number")
    }else
        console.log(n)
}
*/

//C.Give me five
//print out no.s between 1 to 100 with a message"I found a no high five" if it is multiple of 5

// for (let i = 0; i <= 100; i++) {
//     if (i === 0) {
//         continue;
//     }
//     if (i % 3 === 0) {
//         if (i % 5 === 0 ) {
//             console.log('I found a ' + i + '. Three is a crowd');
//             console.log('I found a ' + i + '. High five!');
//         }
//         else {
//             console.log('I found a ' + i + '. Three is a crowd');
//         }
//     } 
//     else if (i % 5 === 0) {
//         if (i % 3 === 0) {
//             console.log('I found a ' + i + '. Three is a crowd');
//             console.log('I found a ' + i + '. High five!');
//         } else {
//             console.log('I found a ' + i + '. High five!');           
//         }
//     }
// } 

//another version
// for(i = 1; i <100;i++){
//     if (i%3==0 && i%5 ==0){
//         console.log('I found a ' + i + '. Three is a crowd');
//         console.log('I found a ' + i + '. High five!');
//     }else if(i%3 ==0){
//         console.log(i + 'I found a ' + i + '. Three is a crowd')
//     }else if(i % 5 ==0){
//         console.log(i + 'I found a ' + i + '. High five!')
//     }else 
//         console.log(i)
// }

//SAVINGS ACCOUNT
//1.sum of the no.s from 1 to 10 saving to a bank_account variable//output 55
// const bank_account = () => {
//     let sum = 0;
//     for (let i = 1; i <= 10; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(bank_account());

//2.double pay: sum of the no.s from 1 to 100 and multiply by 2  //output 10100
// const bank_account = () => {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }
//     return sum * 2;
// }
// console.log(bank_account());

//another version using loops
// let sum = 0;
// for(i = 1; i <= 10; i++){
//     sum = sum + i
// }
// console.log(sum)
// let sum1 = 0;
// for(j = 0;j <= 100;j++){
//     sum1 = sum1 + j*2
// }
// console.log(sum1)

//III. Arrays and control flow
//A.
//1.what ar the things in an array called?
//elements

//2.Do arrays guarantee those things will be in order?
//Yes they are always based on the index number

//3.what real life thing could you model with an array?
//songs list, grocery list, user names from database

//B.
//1.Create an array that contains three quotes and store it in a variable called quotes

// let quotes = ['Try your best!', 'Never give up!', 'Dream big!'];

//C.Accessing the elements

//1.accessing first element
// randomThings[0];
// const randomThings = [1, 10, "Hello", true]
//2.change the value of "hello" to "world"
// randomThings[2] = "world";
//3.check it is updated
//console.log(randomThings)


//D.Change values
//const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1.access the 3rd element
//ourClass[2];

//change the value github to octocat
//ourClass[4] = "Octocat";

//add a new element to the array
//ourClass.push("Cloud City");

//console.log(ourClass)

//E.Mix it up
// const myArray = [5, 10, 500, 20];

// myArray.push("Aegon");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse(); 
// console.log(myArray);

//Yes we mutated.Mutate means to change the original array's structure.
//reverse method will return a copy of the mutated array but we will not see it until we console log it.

//F.Biggie Smalls
// let y = 431;
// if(y<100) {
//     console.log("little number")
// } else {
//     console.log("big number")
// }

//G.Monkey in the middle
// let number = 3;
// if (number < 5) {
//     console.log('little number')
//   } else if (number > 10) {
//     console.log('big number')
//   } else {
//     console.log('monkey')
//   }

//another version
// function middle(num){
//     if(num<5) {
//         console.log("little number")
//     } else if (num>10){
//         console.log("big number")
//     } else {
//         console.log("monkey")
//     }
// }
// middle(1)
// middle(25)
// middle(10)

//H.What's in your closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     'right sock',
//     "GA hoodie",
//     "green pants",
//     "yello knit hat",
//     "marshmallow peeops"
// ];

// //thom's closet is more complicated
// const thomsCloset = [
//     [
//         //shirts
//         "grey button-up",
//         "dark grey button=up",
//         "light blue button-up",
//         "blue button-up"
//     ], [
//         //pants
//         'grey jeans',
//         'jeans',
//         'PJs'
//     ],[
//         //accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// kristynsCloset.splice(6,0,"raybans")   //splice syntax: arrayname.splice(index, howmany,item)
// kristynsCloset[5] = "stained knit hat"
// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}`)
// thomsCloset[1][2] = "Footie Pajamas"

// console.log(kristynsCloset)
// console.log(thomsCloset)

//IV.Functions
//A.Print greeting
// printGreeting = (str) => `Hello,there ${str}!`
// console.log(printGreeting("Slimer"))

// B.print cool
// printCool = (personName) => `${personName} is cool!`
// console.log(printCool("Captain Reynolds"))

//C.CalculateCube
// calculateCube = (num) => `${num*num*num}`
// console.log(calculateCube(5))

//D.isVowel

// const isVowel = letter => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     if (vowels.includes(letter.toLowerCase())) {
//       return true
//     } else {
//       return false
//     }
//   }
//    console.log(isVowel('Z'))

//another way
// function isVowel (ch) {
// let char = ch.toLowerCase();
    
// switch(char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         return true;
//         break;
//         default:
//         return false;        
//     }
// }
// console.log(isVowel('i'))

//E.getTwoLengths
// function getTwoLengths(string1, string2){
//     let lengthOfArr = [string1.length,string2.length]
//     return lengthOfArr
// }
// console.log(getTwoLengths('hank','Hippopopalous'))

//F.getMultipleLengths
// function getMultipleLengths(arrOfStrings){
//     let lengthOfStringsArray = [];
//     for(i = 0; i < arrOfStrings.length ; i++){
//         lengthOfStringsArray.push(arrOfStrings[i].length)
//     }
//     return lengthOfStringsArray
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up","dude"]))

// //G.maxOfThree
// function maxOfThree(num1, num2, num3){
//     if(num1 >= num2){
//         if(num1 >= num3){
//             return num1;
//         }else{
//             return num3
//         }
//     }else {
//         if(num2 >= num3){
//             return num2;
//         }else {
//             return num3
//         }
//     }

// }
// console.log(maxOfThree(8,8,34))

//H.printLongestWord
// function printLongestWord(arrOfStrings){
//     let longest = arrOfStrings[0];
//     for (let i = 0; i < arrOfStrings.length; i++){
//         if(longest.length == arrOfStrings[i].length){
//             continue;
//         }else if(longest.length < arrOfStrings[i].length)
//             longest = arrOfStrings[i]
//     }
//     return longest;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big"]))

//OBJECTS
// //A.Make A User Object

// const user = {
//     name: "Suvarna",
//     email: "abcd@gmail.com",
//     age: 33,
//     purchased: []

// };

// //B.Update the user
// user.email = 'xyz@gmail.com'
// user.age = ++user.age

// //C.Adding Keys And Values
// user.location =  'Charlotte'

// //D.Shopaholic!
// user.purchased.push("carbohydrates")
// user.purchased.push('peace of mind')
// user.purchased.push('Merino jodhpurs')

// console.log(user.purchased[2])

// //E.Object within object
// user.friend = {
//     name: "Grace Hopper",
//     age: 85,
//     location: 'New York',
//     purchased: []
// }
// console.log(user.friend.name)
// console.log(user.friend.location)
// user.friend.age = 55
// console.log(user.friend)
// user.friend.purchased.push("The One Ring", "A Latte")
// console.log(user.friend)
// console.log(user.friend.purchased[1])

// //F.Loops
// for(i = 0; i< user.purchased.length; i++){
//     console.log(user.purchased[i])
// }
// for(j = 0; j < user.friend.purchased.length; j++){
//     console.log(user.friend.purchased[j])
// }

// //G.Functions can operate on objects
// //1.
// function updateUser(){
//     user.age++;
//     user.name.toUpperCase()
// }
// function oldAndLoud(person){
//     user.age++;
//     user.name.toUpperCase()
// }
// oldAndLoud(user)
// console.log(user)

//Hungry for more
// Cat Combinator

//1.Mama Cat
// const cat1 = {
//     name: 'Emily',
//     breed: 'abc',
//     age: 3
// }
// console.log(cat1.age)
// console.log(cat1.breed)

// //2.Papa Cat
// const cat2 = {
//     name: 'Bob',
//     breed: 'xyz',
//     age: 5
// }

// const combineCats = (mama, papa) => {
//     let newCat = {
//         name: mama.name + papa.name,
//         age: 1,
//         breed: mama.breed + '-' + papa.breed
//     }
//     return newCat;
// }
//  console.log(combineCats(cat1, cat2));

// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))))




  












    


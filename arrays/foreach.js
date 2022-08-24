//let foods = ['kimchi', 'tacos','arepa', 'spam']
//for loops
//for (let i =0; i < food.length; i++)

//for of
//for (let item of foods)

//for each(built in array method)
//foods.forEach(function(foodItem){
 //   console.log(foodItem)
//})
// total = 
//const numbers = function(...total){
 //    numbers.forEach(function(numberItem){
  //     console.log(numberItem)
        
 //   });
//}

//FIZZBUZZ
/*function multiplesOfThreeAndFive(n){
    for(let i = 0; i <= n; i++){
        console.log(i % 3 ? '' : 'fizz')
        console.log(i % 5 ? '' : 'buzz')
        console.log(i % 3 && i % 5 ? '' : 'fizzbuzz')
    }
}
console.log(multiplesOfThreeAndFive(100))
*/
// const digits = Array.from(Array(51).keys());

// digits.forEach(myFunction)

// function myFunction(item){
//     for(let i = 0; i <= digits.length; i++){
//         console.log(i % 3 ? '' : 'fizz')
//         console.log(i % 5 ? '' : 'buzz')
//         console.log(i % 3 && i % 5 ? '' : 'fizzbuzz') 
// }
// }

// console.log(myFunction)

 const numsList = Array.from(Array(51).keys())
// const fizzOrBuzz = numsList.map(function(item, idx) {
//     if (item % 3 == 0) {
//         return 'Fizz'
//     }
//     else if (item % 3 != 0 && item % 5 == 0) {
//         return 'Buzz'
//     } else {
//         return item
//     }
// })

// console.log(fizzOrBuzz)

// const fizzAndBuzz = numsList.map(function(item, idx) {
//     if (item % 3 == 0) {
//         if (item % 3 == 0 && item % 5 == 0) {
//             return 'FizzBuzz'
//         } else {
//             return 'Fizz'
//         }
//     }
//     else if (item % 5 == 0) {
//         return 'Buzz'
//     }
//     else {
//         return item
//     }
// })

// console.log(fizzAndBuzz)

//FANCY WAY TO DO FIZZ BUZZ
//for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)


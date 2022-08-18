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
const digits = Array.from(Array(100).keys());

digits.forEach(myFunction)

function myFunction(item){
    //for(let i = 0; i <= digits.length; i++){
        //console.log(i % 3 ? '' : 'fizz')
        //console.log(i % 5 ? '' : 'buzz')
        //console.log(i % 3 && i % 5 ? '' : 'fizzbuzz') 
//}
//}

console.log(myFunction)

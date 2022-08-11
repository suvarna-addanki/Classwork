//function declaration / definition is more flexible
// function declarations are hoisted meaning can be used anywhere 
/*
function sayHello(){
    return 'Hello!'
}

//function expression (not hoisted)
const sayHi = function() {
    return 'Hi!'
}

//arrow function
const sayHey = () => "Hey!"

//calling function
console.log(sayHello())
console.log(sayHi())
console.log(sayHey())
*/

//function with parameters and arguments
/*function add(num1, num2){   //list of parameters
    return num1 + num2
}

console.log(add(2,3))            //list of arguments
console.log(add(2,3,4,5))        // list of arguments can be more than no of parameters
console.log(add(5, 10))
console.log(add('Bob', 'The Builder'))
*/

//function with default parameters add later here*****

//exercise 1 area of a rectangle
/*
function computeArea(width, height){
    return "The area of rectangle of width "+width+" and height of "+height+" is : "+width*height+" square units." 
}

console.log(computeArea(8, 6))
*/
// exercise 1 different version
/*function computeArea1(width, height){
    console.log("The area of a rectangle with a width of " + width +
    " and a height of " + height + " is " + (width*height + " square units."))
}
computeArea1(9,8)
*/
//exercise 2 planet has water
/*const planetHasWater = function(planet){
    var planet1 = planet.toLowerCase();
    if (planet1 ==="earth"||planet1==="mars"){
        return "true"
    } else {
        return "false"
    }
}
console.log(planetHasWater("earth"))
console.log(planetHasWater("juPITER"))
*/

//arrow function version of both ex 1 and ex 2
/*const computeArea2 = (width, height) => "The area of a rectangle with a width of " + width +
" and a height of " + height + " is " + (width*height) + " square units."
console.log(computeArea2(7,8))

const planetHasWater1 = (planet) => (planet.toLowerCase()==="earth"||planet.toLowerCase()==="mars") ? 'true' : 'false'
console.log(planetHasWater1("earth"))
console.log(planetHasWater1("Mars"))
*/
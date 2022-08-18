
//object literal
//OOP- object oriented programming

//objects are collection of zero or more properties
//properties are key: value pair


// let dog = {
//     name: 'Theo',
//     'breed': 'goldendoodle',
//     fur: 'black and white',
//     legs: 4,
//     woof: function(){
//         console.log('woof')
//     },
//     purr: () => {console.log('purr')},
//     talk(speech)  {console.log('speech')}
// }
// console.log(dog)
// console.log(dog.name)

// //we can also access properties with square brackets
// console.log(dog['breed'])

// let propName = 'fur'
// console.log(dog[propName])

// //adding object properties using dot notation
// dog.owner = 'friend'
// console.log(dog)
// dog.woof()


//we can also add arrays, functions and boolean values to the object
//once u added an array to the object and if u want to add more into that array we can use push method

// if the thing you want to model is just a list, use an array
//if the thing want to model has properties, use an object

//use const rather than "let" when declaring object because you cannot reassign/delete that object to anything 
//key should be unique and value can be anything
//dog.talk('feed me')


//8/16  notes:
// let obj = {

// }

// let cat ={
//     name: 'Mr. Bean',
//     fur: 'grey, black, and white',
//     legs: 4,
//     canSpeakFrench: false,
//     //behaviors == functions
//     meow: function() { // method
//         console.log('meow');
//     },
//     purr: () => {
//         console.log('purr');
//     },
//     talk(speech) { //another way to create a method inside a object
//         console.log(speech);
//     }
// }


//-------------------------------

//console.log(cat)
//output { name: 'Mr. Bean', fur: 'grey, black, and white', legs: 4 }

//access property with dot notation
//console.log(cat.name)

//can also access properties with []
//console.log(cat['name'])

//when you dont know property name
//let propName = 'fur'
//console.log(cat[propName])

//add properties, dot notation and assignment
//also change properties
//cat.breed = 'calico'

//console.log(cat)
//output { name: 'Mr. Bean', fur: 'grey, black, and white', legs: 4, breed: 'calico'}

//if want to add to properties later, make array and add on that way

//if add multiple properties with same name, takes the last one, most recent


//cat.meow();  //invoke function within object
//output meow
//method : functions inside of objects?
//cat.talk('hello');


//-------------------------------------------


// if (cat.canSpeakFrench === true) {
//     console.log('oui')
// } else {
//     console.log('no')
// }
// //output no


// for (let i = 0; i < cat.legs; i++){
//     console.log('LEG')
// }
//output LEG LEG LEG LEG


//check if property exists
// console.log('Does my cat have legs?')
// if (cat.science) { //undefined
//     console.log('oui')
// } else {
//     console.log('no')
// }

//output no, because.science is not a defined property
//if console.log cat.science - undefined


//-----------------------------------------------------------------

//for .... in loop, useful for  objects


// for (let key in cat) {  //key represents ... fur, name, legs, age, meow
//     console.log('key: ', key)
//     //prop is string value
//     console.log('value: ', cat[key])  // access the value , cat['fur']
//     console.log();
// }

// output example
// key:  name
// value:  Mr. Bean
// etc ...

// use case


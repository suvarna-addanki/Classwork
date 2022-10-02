// const meat = [
//     {
//         name: 'hamburger',
//         type: 'rare'
//     },
//     {
//         name: 'bacon',
//         type: 'crispy',
//     },
//     {
//         name: 'chicken',
//         type: 'wing',
//     }
// ];

const mongoose = require('mongoose')  //mongoose is all about collections and documents not tables and columns

//add a shortcut to schema
const Schema = mongoose.Schema

//create our fruit schema
const meatSchema = new Schema({
    name:{ type: String, required: true},
    type:{ type: String, required: true},
    //readyToEat: Boolean

})

//create a model from our schema (capital letter for model)
const Meat = mongoose.model('Meat', meatSchema)  //so instead of fruits.js that we created we are going to use fruit.js thru mongoose


module.exports = Meat
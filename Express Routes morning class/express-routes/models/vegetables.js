// const vegetables = [
//     {
//         name: 'broccoli',
//         color: 'green',
//     },
//     {
//         name: 'kale',
//         color: 'green',
//     },
//     {
//         name: 'corn',
//         color: 'yellow',
//     }
// ];


const mongoose = require('mongoose')  //mongoose is all about collections and documents not tables and columns

//add a shortcut to schema
const Schema = mongoose.Schema

//create our fruit schema
const vegetableSchema = new Schema({
    name:{ type: String, required: true},
    color:{ type: String, required: true},
    //readyToEat: Boolean

})

//create a model from our schema (capital letter for model)
const Vegetable = mongoose.model('Vegetable', vegetableSchema)  //so instead of fruits.js that we created we are going to use fruit.js thru mongoose

module.exports = Vegetable
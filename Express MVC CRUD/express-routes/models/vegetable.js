// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const vegetableSchema = new Schema({
    name: { type: String, required: true }, 
    color: { type: String, required: true }, 
    //readyToEat: Boolean
})

// create a Model from our Schema                          //mongoose gives the structure for our data
const Vegetable = mongoose.model('Vegetable', vegetableSchema)  //mongoose is creating data model based on the schema(aka blue print)

// export our Model
module.exports = Vegetable;

//question : what is the first variable in line 15????  collection name
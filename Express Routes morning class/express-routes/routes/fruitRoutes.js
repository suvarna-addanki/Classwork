// Load express
const express = require('express')

//INDUCES
//INDEX, NEW, DELETE, UPDATE,CREATE, EDIT, SHOW

// Create a special router object for our routes
const router = express.Router()

// Load our fruits data                          //also deleted fruits.js (which has fruits array) from the model
//const fruits = require('../models/fruits')      //technically we dont need this because we are using mongoose

const Fruit = require('../models/fruit') //loading fruit.js from model

// Setup "index" route
router.get('/', (req, res) => { 
    //find takes 2 arguements
    //1: an object with our query (to filter our data and find exactly what we need)
    //2:callback(with an error object and the found data)

    Fruit.find({}, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', { fruits: foundFruit})  //if no error go to index page
        }
    })


    //res.send(fruits)
    //res.render('fruits/Index', { fruits: fruits})
})

// Setup "new" route
router.get('/new', (req, res) => {     
    //res.send('<form>Create fruit</form>')
    res.render('fruits/New')
})

// Setup "destroy" route
router.delete('/:id', (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a fruit at index! (in DB)')

    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
       // console.log(deletedFruit)
       if(err){
        res.status(400).json(err)
       } else{
        res.status(200).redirect('/fruits')
       }
    })
})

// Setup "update" route
router.put('/:id', (req, res) => {

    console.log(req.body)
    if(req.body.readyToEat === "on") {
        req.body.readyToEat = true
    }else {
        req.body.readyToEat = false
    }
    //findbyidandupdate takes 4 arguements
    //1:the id
    //2: new date we want to use to update the old document
    //3:(optional) an options object which looks like this:{ new: true}
    //4: callback(with error object and updatedfruit or foundfruit)

    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, foundFruit) => {
        if(err) {
            res.status(400).json(err)
        }else {
            res.status(200).redirect(`/fruits/${req.params.id}`)
        }
    })

    //res.send('Updating a fruit at index! (in DB)')
})

// Setup "create" route
router.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.readyToEat === "on") {
        req.body.readyToEat = true
    }else {
        req.body.readyToEat = false
    }
    // fruits.push(req.body)  //commented45 to 48 because we dont want to push into the array anymore because we are using mongoose
    // console.log(fruits)
    // res.send('Creating a new fruit! (in DB)')
    // res.redirect('/fruits')

    //create has 2 arguments:
    //1: the date we want to send
    //2.callback function
    Fruit.create(req.body, (err, createdFruit) => {   //createdfruit name can be anything that we want, err argument is for throwing error in case if we have any connection errors
        if(err) {
            res.status(400).json(err)    //if there is error(meaning validation is wrong like for example:if the fruit name is not string ot the if the user left any required fields empty) then status is 400
        } else{
            res.status(200).redirect('/fruits')  //if there is no error then we redirect to the fruits page
        }
        //res.json(createdFruit)
    })
})

// Setup "edit" route
router.get('/:id/edit', (req, res) => {
    //res.send('<form>Edit fruit</form>')
})

// Setup "show" route  
router.get('/:id', (req, res) => {
    //res.send(fruits[req.params.index])
    //res.render('fruits/Show', { fruit: fruits[req.params.index]}) //Passing render thru first argument, passing data thru second argument by targeting specific index passing thru URL

    //findbyid accepts 2 arguemnets
    //1:id of the document in our database
    //2: callback (with error object and the found document)
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', { fruit: foundFruit})
        }
    })
})

//setup seed route









module.exports = router

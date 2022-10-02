// Load express

const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our meat data
const Meat = require('../models/meat')
//const vegetables = require('../models/vegetables')

// Setup "index" route
router.get('/', (req, res) => {  
    //res.send(vegetables)
    //res.render('meat/Index', { meat: meat})

    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', { meat: foundMeat})  //if no error go to index page
        }
    })
})

// Setup "new" route
router.get('/new', (req, res) => {     
    //res.send('<form>Create fruit</form>')
    res.render('meat/New')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a meat at index! (in DB)')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a meat at index! (in DB)')
})

// Setup "create" route
router.post('/', (req, res) => {
    console.log(req.body)
    // if(req.body.readyToEat === "on") {
    //     req.body.readyToEat = true
    // }else {
    //     req.body.readyToEat = false
    // }
    // meat.push(req.body)
    // console.log(meat)
    // res.send('Creating a new meat! (in DB)')
    // res.redirect('/meat')

    Meat.create(req.body, (err, createdMeat) => {   //createdfruit name can be anything that we want, err argument is for throwing error in case if we have any connection errors
        if(err) {
            res.status(400).json(err)    //if there is error(meaning validation is wrong like for example:if the meat name is not string ot the if the user left any required fields empty) then status is 400
        } else{
            res.status(200).redirect('/meat')  //if there is no error then we redirect to the meat page
        }
        //res.json(createdFruit)
    })
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "show" route  
router.get('/:id', (req, res) => {
    //res.send(fruits[req.params.index])
    //res.render('meat/Show', { meat: meat[req.params.index]}) //Passing render thru first argument, passing data thru second argument by targeting specific index passing thru URL

    Meat.findById(req.params.id, (err, foundMeat) => {
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Show', { meat: foundMeat})
        }
    })

})

// // Setup "index" route
// router.get('/', (req, res) => {  
//     res.send(meat)
// })

// // Setup "show" route  
// router.get('/:index', (req, res) => {
//     res.send(meat[req.params.index])
// })

module.exports = router
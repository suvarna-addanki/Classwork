// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our fruits data
const vegetables = require('../models/vegetables')

// Setup "index" route
router.get('/', (req, res) => {  
    //res.send(vegetables)
    res.render('vegetables/Index', { vegetables: vegetables})
})

// Setup "new" route
router.get('/new', (req, res) => {     
    //res.send('<form>Create fruit</form>')
    res.render('vegetables/New')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a vegetable at index! (in DB)')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a vegetable at index! (in DB)')
})

// Setup "create" route
router.post('/', (req, res) => {
    console.log(req.body)
    // if(req.body.readyToEat === "on") {
    //     req.body.readyToEat = true
    // }else {
    //     req.body.readyToEat = false
    // }
    vegetables.push(req.body)
    console.log(vegetables)
    res.send('Creating a new vegetable! (in DB)')
    res.redirect('/vegetables')
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    //res.send(fruits[req.params.index])
    res.render('vegetables/Show', { vegetable: vegetables[req.params.index]}) //Passing render thru first argument, passing data thru second argument by targeting specific index passing thru URL
})

// // Setup "show" route  
// router.get('/:index', (req, res) => {
//     res.send(vegetables[req.params.index])
// })

module.exports = router
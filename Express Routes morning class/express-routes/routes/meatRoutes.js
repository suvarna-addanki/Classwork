// Load express

const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our fruits data
const meat = require('../models/meat')
//const vegetables = require('../models/vegetables')

// Setup "index" route
router.get('/', (req, res) => {  
    res.send(meat)
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    res.send(meat[req.params.index])
})

module.exports = router
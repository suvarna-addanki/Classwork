//load express

const express = require('express')


const router = express.Router()  //load our path

const Vegetable = require('../models/vegetable') //load our data

// Bring in controller functions (destructure methods)
const { 
    findAllMeats, 
    showNewView, 
    createNewMeat,
    seedStarterData,
    showOneMeat,
    showEditView,
    updateOneMeat,
    deleteOneMeat
} = require('../controllers/meatController')

//index route
router.get('/', findAllVegetables)

//new route
router.get('/new', showNewView)

//delete route
router.delete('/:id',deleteOneVegetable)

//update route
router.put('/:id', updateOneVegetable)

//create route
router.post('/', createNewVegetable)

//edit
router.get('/:id/edit', showEditView)

//show route
router.get('/:id',showOneVegetable)

module.exports = router

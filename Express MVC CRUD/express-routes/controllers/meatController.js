const Meat = require('../models/meat')

// ROUTE     GET /fruits    (index)
const findAllMeats = (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', { meats: foundMeat })
        }
    })
}

// ROUTE      GET /fruits/new    (new)
const showNewView = (req, res) => {     
    // res.send('<form>Create fruit</form>')
    res.render('meats/New')
}

// ROUTE     POST /fruits     (create)
const createNewMeat = (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
}


// ROUTE       GET /fruits/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Meat.deleteMany({}, (err, deletedMeats) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.meats)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Meat.create(seed.meats, (err, createdMeat) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/meats')
                }
            })
        }
    })
}

// ROUTE     GET /fruits/:id     (show)
const showOneMeat = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Show', { meat: foundMeat })
        }
    })
}


// ROUTE      GET /fruits/:id/edit     (edit)
const showEditView = (req, res) => {
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Edit', { meat: foundMeat })
        }
    })
}

// ROUTE     PUT /fruits/:id       (update)
const updateOneMeat = (req, res) => {

    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundFruit or updatedFruit)
    Meat.findByIdAndUpdate(req.params.id, req.body, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/meats/${req.params.id}`)
        }
    })
}


// ROUTE       DELETE /fruits/:id      (destroy)
const deleteOneMeat = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a fruit at index! (in DB)')
    
    Meat.findByIdAndDelete(req.params.id, (err, deletedMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
}

module.exports = {
    findAllMeats,
    showNewView, 
    createNewMeat,
    seedStarterData,
    showOneMeat,
    showEditView,
    updateOneMeat,
    deleteOneMeat
}
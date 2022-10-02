const Vegetable =require('../models/vegetable')

const findAllVegetables = (req, res) => {
    Vegetable.find({}, (err,foundVegetable) =>{
        if(err){
            res.status(400).json(err)
        }else {
            res.status(200).render('/vegetable/Index', {vegetables: foundVegetable})
        }
    })
}

const showNewView = (req,res) => {
    res.render('vegetables/New')
}

const createNewVegetable = (req, res) => {
    Vegetable.create(req.body, (err, createdVegetable) => {
        if(err){
            res.status(400).json(err)
        }else {
            res.status(200).redirect('/vegetables')
        }
    })
}

const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Vegetable.deleteMany({}, (err, deletedVegetables) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.vegetables)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Vegetable.create(seed.vegetables, (err, createdVegetable) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/vegetables')
                }
            })
        }
    })
}

const showOneVegetable = (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if(err){
            res.status(400).json(err)
        }else{
            res.status(200).render('/vegetables/Show', {vegetable:foundVegetable})
        }
    })
}

const showEditView = (req,res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if(err){
            res.status(400).json(err)
        }else{
            res.status(200).render('/vegetables/Edit', {vegetable:foundVegetable})
        }
    })
}

const updateOneVegetable = (req, res) => {
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, foundVegetable) => {
        if(err){
            res.status(400).json(err)
        }else{
            res.status(200).redirect(`/vegetables/${req.params.id}`)
    }
})
}

const deleteOneVegetable = (req,res) => {
    Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
        if(err) {
            res.status(400).json(err)
        }else{
            res.status(200).redirect('/vegetables')
        }
    })

    }

    module.exports = {
        findAllVegetables,
        showNewView, 
        createNewVegetable,
        seedStarterData,
        showOneVegetable,
        showEditView,
        updateOneVegetable,
        deleteOneVegetable
    }
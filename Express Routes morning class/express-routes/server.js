// Load express
const express = require('express')

const mongoose= require('mongoose')

const methodOverride = require('method-override')

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')

const meatRoutes = require('./routes/meatRoutes')

const vegetableRoutes = require('./routes/vegetableRoutes')

require('dotenv').config() //installed package using command npm i dotenv


// Creates our express app (object)
const app = express()

// Identify our port   //this env file will contain all sensitive information that you can't share publicly on GitHub. for example passwords, api keys..

const port = process.env.PORT  //(instead of const port =3000 to hide the portnumber)


//setup our view engine
app.set('view engine', 'jsx') //telling server to use viewengine
app.engine('jsx', require('express-react-views').createEngine())  //

// Middleware

app.use(express.urlencoded({extended:false}))   // if extended is false, you can not post "nested object", nested object is an object inside an object but if you put it to true you will be able to

app.use(express.static("public"))             //middleware for stylesheets(css)

app.use(methodOverride("_method"))            //middleware for the new package(method override)


//route setups must always be after middleware

app.use('/fruits', fruitRoutes)

app.use('/meat', meatRoutes)

app.use('/vegetables', vegetableRoutes)

mongoose.connect(process.env.MONGO_DB)
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB!')
})

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})


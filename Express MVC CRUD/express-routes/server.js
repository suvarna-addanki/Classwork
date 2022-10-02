// Load express
const express = require('express')
//by default html forms will take only get and post methods but not delete so we need to install method-override thru the command npm i method-override

const methodOverride = require('method-override')


// Bring in mongoConfig function
const mongoConfig = require('./config')

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')

const meatRoutes = require('./routes/meatRoutes')

require('dotenv').config()

// Creates our express app (object)
const app = express()

// Identify our port
const port = process.env.PORT

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))

app.use('/fruits', fruitRoutes)
app.use('/meats',meatRoutes)

// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))

// Connect to DB
mongoConfig()





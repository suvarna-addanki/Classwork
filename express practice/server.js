//load express
const express = require('express')

//create our express app
const app = express()

//define a root route(home page)
//pass it two arguements:
//the path "/", and the second is the
//callback, with our homies "req" and "res"

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!<h1>')
// })

// app.get('/home', (req, res) => {
//     res.send('<h1>Welcome to the home page!!<h1>')
// })

//tell our app to listen on port 3000
//for HTTP requests from clients


//rendering a view
//res.render() - Render a view template and send the resulting HTML to the browser.

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })

app.listen(3000, () => {
    console.log('Listening on port 3000')
})





   
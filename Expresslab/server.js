const express = require('express')

const app = express()

app.get('/greeting/:name', (req, res) => {
    res.send("Wow! Hello there," + req.params.name)
} )

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`<h1>Your tip is ${req.params.total * (req.params.tipPercentage/100)} <h1>`)
})

app.get('/magic/:question', (req, res) => {
    let answer = magicball[Math.floor(Math.random() * magicball.length)]
    res.send(`${req.params.question} <h1>${answer}</h1>`)
})

const magicball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
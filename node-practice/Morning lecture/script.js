// const fs = require('fs')
// console.log("message 1")

// fs.writeFile('./hello.txt','Hello!', () => {
//     console.log('Successfully created file!')
// })

// 

//load the days of the week from 

// let dayOfWeek = require('./days-of-the-week')
// console.log(dayOfWeek)

// let days = require('./days-of-the-week')
// console.log(days)

const random = require('./utilities/random');
 for (let i = 0; i < 10; i++) {
 console.log( random(100, 200) );
 }

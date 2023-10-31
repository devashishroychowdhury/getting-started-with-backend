// Importing the express module
const express = require('express')
const page = express() //assiging a variable as express function
const port = 3000 || process.env //assigning a port number
const path = require('path') //importing path module

page.set('view engine', 'ejs')

page.use(express.static(path.join(__dirname, 'static')))

// Using routes
page.get('/', (req, res) => {
    res.render('Home')
})


// Listening the port
page.listen(port)

console.log(`Server is running on http://localhost:${port}`)
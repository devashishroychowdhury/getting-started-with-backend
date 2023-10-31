// Importing the express module
const express = require('express')
const page = express() //assiging a variable as express function
const port = 3000 || process.env //assigning a port number

// Using routes
page.get('/', (req, res) => {
    res.send('Express Server')
})

// Listening the port
page.listen(port)

console.log(`Server is running on http://localhost:${port}`)
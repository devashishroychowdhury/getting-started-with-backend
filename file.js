const fs = require('fs'); //including fs module

// using fs module with readFile method
fs.readFile('note.txt', 'utf8', function (err, data) {
    console.log(data); //Displaying file content
});

console.log('Reading the file \n');
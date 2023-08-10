const http = require('http'); //importing or requiring http module

const hostname = '127.0.0.1'; // initialising hostname
const port = 3000; // initialising portname

const server = http.createServer((req, res) => {
    res.statusCode = 200; //Status Code
    res.setHeader('Content-Type', 'text/plain'); //Content Type
    res.end('Hello World'); //Server's Endpoint 
});

// Listening the server on respective port and host
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
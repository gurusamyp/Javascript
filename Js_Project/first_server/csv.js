// import http module
const http = require('http');

// where the server is lisening
const host = 'localhost';
const port = 8000;

//request listner - to handle request and response
const requestListener = function (req, res){
    res.writeHead(200); // response code set in HTTP 200-ok
    res.end("My First Server!"); // send the response body and close the connection
}

//create server with request listener
const server = http.createServer(requestListener);
server.listen(port, host, () => { // start listening
    console.log(`Server is running on http://${host}:${port}`);
} );
// import http module
const http = require('http');

// where the server is lisening
const host = 'localhost';
const port = 8000;

//request listner - to handle request and response
const requestListener = function (req, res){
    const data = {
                    message: "This is a JSON response",
                    timestamp: Date.now(),
                    note: 'He said "hello"' // Quotes automatically escaped
                };
    
    res.setHeader("Content-Type", "application/json"); // set header before write head.
    res.writeHead(200); // response code set in HTTP 200-ok
    // res.end(`{"messsage" : "This is a JSON response"}`); // send the response body and close the connection
    res.end(JSON.stringify(data));
}

//create server with request listener
const server = http.createServer(requestListener);
server.listen(port, host, () => { // start listening
    console.log(`Server is running on http://${host}:${port}`);
} );
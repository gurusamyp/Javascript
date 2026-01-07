// import http module
const http = require('http');

// where the server is lisening
const host = 'localhost';
const port = 8000;

//request listner - to handle request and response
const requestListener = function (req, res){
    res.setHeader('Content-Type','text/csv');
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv"); // browser how to display the data, downloading filename = oceanpals.csv,
    res.writeHead(200); // response code set in HTTP 200-ok
    res.end("`id,name,email\n1,Sammy Shark,shark@ocean.com`"); // send the response body and close the connection
}

//create server with request listener
const server = http.createServer(requestListener);
server.listen(port, host, () => { // start listening
    console.log(`Server is running on http://${host}:${port}`);
} );
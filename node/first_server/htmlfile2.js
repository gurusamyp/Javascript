// import http module
const http = require('http');
const fs = require('fs').promises;

// where the server is lisening
const host = 'localhost';
const port = 8000;

// file to store the html content
let indexFile;

//request listner - to handle request and response
const requestListener = function (req, res){
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);// response code set in HTTP 200-ok
            res.end(indexFile); // send the response body and close the connection
}
//create server with request listener
const server = http.createServer(requestListener);



fs.readFile(__dirname + "/index.html") // read the file __dirname is absolute path
        .then(content => {
            indexFile = content;
            server.listen(port, host, () => { // start listening
                console.log(`Server is running on http://${host}:${port}`);
            });
        })
        .catch(err => {
            res.writeHead(500);
            res.end('Internal Server Error');
            return;
        })


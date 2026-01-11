const http = require('http');

// book details
const books = JSON.stringify([
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

// author details
const authors = JSON.stringify([
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);



const requestListener = function(req, res){

    const host = req.headers.host || 'localhost:8000';
    const url = new URL(req.url, `http://${host}`);

    console.log(url);

    res.setHeader('Content-Type', 'application/json');
    switch (url.pathname){
        case '/books':
            if(req.method !== 'GET'){
                res.writeHead(405, {'Allow':'GET'})
                return res.end(JSON.stringify({error: 'Method not allowed'}));
            }
            res.writeHead(200);
            return res.end(books); // case will return so no need of break;
        case '/authors':
            if(req.method !== 'GET'){
                res.writeHead(405, {'Allow':'GET'})
                return res.end(JSON.stringify({error: 'Method not allowed'}));
            }
            res.writeHead(200);
            return res.end(authors); // case will return so no need of break;
        default: 
            res.writeHead(404);
            return res.end(JSON.stringify({error: 'Resource not available'}));
    }
}
const server = http.createServer(requestListener);

server.listen(requestListener.url, () => {
    console.log(`Server is running in ${requestListener.url}`);
})
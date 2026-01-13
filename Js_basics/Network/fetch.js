//fetch(url, [options])
/*| Option           | Purpose            |
| ---------------- | ------------------ |
| `method`         | HTTP method        |
| `headers`        | Request headers    |
| `body`           | Request payload    |
| `mode`           | CORS control       |
| `credentials`    | Cookies/auth       |
| `cache`          | Cache behavior     |
| `redirect`       | Redirect handling  |
| `referrer`       | Referrer header    |
| `referrerPolicy` | Referrer rules     |
| `integrity`      | Security check     |
| `keepalive`      | Background request |
| `signal`         | Abort request      |
| `window`         | Browser context    |
*/

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);
let commit = await response.json();
console.log(commit[0].author.login); //smith558

//orrrrrrrrrr

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(data => console.log(data)) //[Function: json]
    // .then(commit => console.log(commit[0].author.login)); //Cannot read properties of undefined (reading 'author')



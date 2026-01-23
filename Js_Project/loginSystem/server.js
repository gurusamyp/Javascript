const express = require('express'); 
const session = require('express-session');
const mysql = require('mysql2');

const app = express();

app.use(express.json());
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized:false,
}));


const db = mysql.createPool({
    host: 'loaclhost',
    user: 'root',
    password: 'Abs@1918',
    database:'login_system'
});

app.post('/login', (req, res) => {
    console.log('login')
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
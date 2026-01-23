const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abs@1918',
    database: 'user_directory'
});

db.connect((err) => {
    if(err){
        console.error('MySql connection failed: ', err);
        return;
    }

    console.log('MySQL connected successfully');
});

module.exports = db;
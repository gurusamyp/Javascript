const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Abs@1918",
    database: "testdb"
});
db.connect((err) => {
    if(err){
        console.error("DB Connection failed: ", err);
    } else{
        console.log("MySQL Connected");
    }
});

module.exports = db;
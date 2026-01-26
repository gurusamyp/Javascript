const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});


const db = pool.promise();

// Quick check to verify connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ DB Connection Error:', err.message);
    } else {
        console.log('✅ DB Connected via Pool');
        connection.release(); // Important: release the connection back to the pool
    }

});
// db.connect((err) => {
//     if(err){
//         console.error('DB error',err)
//     }
//     console.log('DB Connected')
// })

module.exports = db;
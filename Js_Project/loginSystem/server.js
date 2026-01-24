require('dotenv').config();

const express = require('express'); 
const session = require('express-session');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const auth = require('./middleware/auth');
const role = require('./middleware/role');

const app = express();

app.use(express.json());
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized:false,
}));


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Abs@1918',
    database:'login_system'
});

/// for bcrypt implementation
// (async () => {
//     const hash = await bcrypt.hash('admin123',10);

//     db.query('INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)',
//         ['admin', 'admin@test.com' , hash, 'admin'], (err, result) => {
//             // console.log('admin user created');
//             if (err) {
//                 console.error(err.message);
//             } else {
//                 console.log('Admin user created, ID:', result.insertId);
//             }
//             process.exit();
//         }
//     );
// })();

// app.post('/login', (req, res) => {
//     const {username, password} = req.body;
    
//     if(!username && !password){
//         return res.status(400).json({message: 'Invalid credentials'})
//     }

//     db.query(
//         'SELECT id, password_hash, role, is_active FROM users WHERE username = ?', [username],
//         async (err, results) => {
//             console.log(results[0])
//             if(err) return res.status(500).json({message: ' Server Error'})

//             if(results.length === 0 || !results[0].is_active){
//                 return res.status(401).json({message: 'Invalid Credentials'});
//             }
//             const user = results[0];

//             const match = await bcrypt.compare(password, user.password_hash);
//             if(!match){
//                 return res.status(401).json({message : ' Invalid Credentials'})
//             }

//             req.session.userId = user.id;
//             req.session.role = user.role;

//             res.json({message : 'Login Successful', role: user.role});
//         }

//     );
// });


// got JWT implementation
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    
    if(!email && !password){
        return res.status(400).json({message: 'Invalid credentials'})
    }

    db.query(
        'SELECT * FROM users WHERE email = ?', [email],
        async (err, results) => {
            console.log(results[0])
            if(err) return res.status(500).json({message: ' Server Error'})

            if(results.length === 0 || !results[0].is_active){
                return res.status(401).json({message: 'Invalid Credentials'});
            }
            const user = results[0];

            const match = await bcrypt.compare(password, user.password_hash);
            if(!match){
                return res.status(401).json({message : ' Invalid Credentials'})
            }

             //create JWT
             const token = jwt.sign(
                { 
                    id: user.id, 
                    role:user.role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1hr'
                }
             );


            res.json({
                message : 'Login Successful', 
                token
            });
        }

    );
});

app.get('/admin/dashboard' , auth, role(['admin']), (req, res) => {
    res.json({message: 'Welcome Admin'})
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
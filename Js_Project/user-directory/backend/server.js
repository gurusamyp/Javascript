const express = require('express');
const cors = require('cors');
const db = require('./db/connection');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());

// app.use(cors({
//   origin: "http://localhost:3000" // specify the allowed origin
// }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('User Directory API is running');
    // res.json({ message: 'API running' });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.post('/import-users', async (req, res) => {
    try {
        //fetch users
        const response = await axios.get('https://dummyjson.com/users?limit=30');
        const users = response.data.users;
        //prepare data to Mysql insert  
        users.forEach(user => {
            const {id, firstName, lastName, email, age, gender, role, image } = user;
            const city = user.address.city;
            // console.log(city);
            const query =`
                INSERT IGNORE INTO users
                (id, first_name, last_name, email, age, gender, city, role, image )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)
            `;
            //run the query
            const values = [id, firstName, lastName, email, age, gender, city, role, image];
            db.query(query, values, (err, result) => {
                if(err) console.error('Insert Error: ', err);
            });
        });

        res.json({message: 'Users imported completed'});
    } catch (error) {
        console.error(error);
        res.status(500).json({errr:'Failed to import users'});
    }
});

app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, result) => {
        if(err){
            console.log('DB fetch error');
            return res.status(500).json({error:'failed to fetch users'});
        }
        res.json(result);
    })
})
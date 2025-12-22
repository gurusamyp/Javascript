const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

//Home

app.get("/", (req, res) => {
    res.send("Simple SQL + JS Project");
});

//get all users
app.get("/users", (req, res)=>{
    db.query("SELECT * FROM users", (err, result) => {
        if(err) return res.status(500).send(err);
        res.json(result);
    });
});


//Add a user
app.post("/users", (req, res) => {
    const {name, email} =req.body;

    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
    db.query(sql, [name, email], (err, result)=>{
        if(err) return res.status(500).send(err);
        res.send(`User added: ${name}, ${email}`);
    });
});

app.listen(3000, ()=> {
    console.log("Server running on port 3000");
})
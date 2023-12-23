const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const mysql = require('mysql')

app.get("/", (req, res) => {
    res.send('Hello i am express')
})

const sqldb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_sqldb"
})

app.get('/employee', (req, res) => {
    const sql = "Select * from employee";
    sqldb.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})
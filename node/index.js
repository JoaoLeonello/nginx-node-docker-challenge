const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const random_name = require('node-random-name');

app.get('/', async (req, res) => {
    const insert = `INSERT INTO people(name) values("${random_name()}")`
    connection.query(insert)
    connection.query('SELECT name FROM people', async (error, results, fields) => {
        const resultArray = results.map((result) => { return result.name })
        res.send('<h1>Full Cycle Rocks!</h1>' + resultArray)
    });    
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});
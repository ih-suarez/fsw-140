const express = require('express');
const mysql = require('mysql2');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'macbookp',
    database: 'bobross',
    default: 'bobross'
})

// Get Season One
app.get('/season1', (req, res) => {
    let sql = 'SELECT episode, title FROM bobross.seasonone';
    db.query(sql, (err, result) => {
        err ? err : res.send(result)
    });
})

// Get Season Two
app.get('/season2', (req, res) => {
    let sql = 'select episode, title from bobross.seasontwo';
    db.query(sql, (err, result) => {
        err ? err : res.send(result)
    })
})




db.connect(err => err ? err : console.log('Database Connection Established'))














app.listen(9000, () => console.log('Listenig On Port 9000'))
const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql2 = require('mysql2');

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// establish a connection
const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'macbookp',
        database: 'vehicles',
        default: 'vehicles'
    }
);

// Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL Database Connection Established Succesfully');
});

// Create DB
app.get('/createdb', (req, res) => {
    let sql = "CREATE DATABASE vehicles"
    // Run the SQL Command
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send('vehicles Database Created Successfully!');
    })
})

// Create Table
app.get('/createTable', (req, res) => {
    let sql = "CREATE TABLE inventory (id INT auto_increment, make VARCHAR(50), model VARCHAR(50), year INT, PRIMARY KEY(id))"
    // Run the SQL Command
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send(`Table 'inventory' Created Successfully!`);
    })
})

// Insert Command
app.get('/insertVehicle1', (req, res) => {
    let post = {make: 'Ford', model: 'Raptor', year: 2019};
    let sql = "INSERT INTO inventory SET ?"
    // Run the SQL Command
    db.query(sql, post, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send(`${post.make} Inserted Successfully`);
    })
})

// Second Vehicle
app.get('/insertVehicle2', (req, res) => {
    let post = {make: 'Dodge', model: 'Charger', year: 2021};
    let sql = "INSERT INTO inventory SET ?"
    // Run the SQL Command
    db.query(sql, post, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send(`${post.make} Inserted Successfully`);
    })
})

// Get All Vehicles
app.get('/getVehicles', (req, res) => {
    let sql = 'SELECT * FROM inventory';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send(result);
    })
})

// Get By id
app.get('/getVehicle/:id', (req, res) => {
    let sql = `SELECT * FROM inventory WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send(`${sql} - Executed`);
    })
})

app.get('/updateVehicleMake/:id', (req, res) => {
    const newMake = 'Changed!';
    let sql = `UPDATE inventory SET title = '${newTMake}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send(`${sql} - Executed`);
    })
})

app.get('/updateVehicleModel/:id', (req, res) => {
    const newModel = 'Changed!';
    let sql = `UPDATE inventory SET model = '${newModel}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send(`${sql} - Executed`);
    })
})

app.get('/deleteVehicle/:id', (req, res) => {
    let sql = `DELETE FROM inventory WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send(`${sql} - Executed`);
    })
})

// Error Handling
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message});
});

// Listen to port 9000
app.listen(9000, () => {
    console.log('Server listening to port 9000');
});
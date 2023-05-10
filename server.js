const express = require('express')
const mysql = require('mysql2')

// mysql connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'nodemysql'
})

// connect 
db.connect((err) => {
    if(err) {
        console.error(`error connecting to mysql: ${err}`);
        throw err; 
    } else {
        console.log(`mysql connected..`);
    }
})

const app = express()

// create db 
app.get('/create-db', async(req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, async(err, data) => {
        if(err) {
            console.error(`error creating db: ${err}`);
            throw err 
        } else {
            console.log(`database created: ${data}`);
            res.send(data)
        }
    })
})

// HOME
app.get('/', async(req, res) => {
    res.send('Server connected..')
})

// CREATE TABLE
app.get('/create-post-table', async(req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, async(err, data) => {
        if(err) {
            console.error(`error creating post table: ${err}`);
            throw err; 
        } else {
            console.log(`post table created, data: ${data}`);
            res.send(data)
        }
    })
})

app.listen('3000', async() => {
    console.log(`server running on port: 3000`);
})
const dotenv = require("dotenv");
const express = require('express');
const mysql = require('mysql2');
const cors = require("cors");

const userRoutes = require('./routes/user.routes');
const db = require('./utils/db.config')

dotenv.config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const SERVER_PORT = process.env.SERVER_PORT; 

// console.log(`
//     env creds: 
//         host: ${DB_HOST},
//         USER: ${DB_USER},
//         PASS: ${DB_PASSWORD},
//         DB: ${DB_DATABASE},
//         PORT: ${SERVER_PORT}
// `);

const app = express()
app.use(express.json())
app.use(cors())

// HOME
app.get('/', async(req, res) => {
    res.status(200).json({
        message: `Starting server..`
    })
})

// API endpoint initials 
app.use('/user', userRoutes)

db.connect((err) => {
    if(err) {
        console.error(`error connecting to mysql: ${err}`);
        process.exit(1);
    } else {
        console.log(`mysql connected..`);
        app.listen('3000', async() => {
            console.log(`Server is running on port: 3000`);
        })
    }
})

const mysql = require('mysql2');

// mysql config
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'user_database'
})


const get_user_data = (username) => {

    console.log(`fetching data for ${username}`);

    try {
        const user_data = db.query(`
        SELECT * FROM users WHERE username = ?
        `, [username]);

        return user_data
    } catch (error) {
        console.error(`error in getting user data: ${error}`);
        throw error; 
    }
}

exports.get_user_data = get_user_data; 
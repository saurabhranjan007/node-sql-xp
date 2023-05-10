const db = require('../utils/db.config')

// LOGIN
const loginController = async (req, res) => {
    console.log(`inside login controller`);

    const { username, password } = req.body;
    console.log(`user: ${username}, pas: ${password}`);

    try {
        console.log(`getting user data for: ${username}, type: ${typeof(username)}`);

        const userData = await new Promise((resolve, reject) => {
            // 'SELECT * FROM users WHERE username = ?', [username],
            db.query('SELECT * FROM users', (err, result) => {
                if (err) {
                    console.error(`error in fetching user data: ${err}`);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log(`user data:`, userData);

        let user_status, user_name;

        userData?.map((data) => {
            console.log(`data: ${data.username.toLowerCase()}`);
            if (
                data.username.toLowerCase() === username.toLowerCase() && 
                data.password.toLowerCase() === password.toLowerCase()
                ) {
                // console.log(`user exists: ${data.username}`);
                return res.status({
                    message: 'user exists',
                    user_name: username.toLowerCase()
                })
                // user_status = true
                // user_name = data.username.toLowerCase()
            }
        })

        return res.status(500).json({
            message: 'invalid user'
        })

        // console.log(`comparison data: 
        //     status: ${user_status},
        //     user: ${ user_name}
        // `);

        // if(user_status) {
        //     return res.status(200).json({
        //         message: 'user available',
        //         user: user_name
        //     })
        // } else {
        //     return res.status(400).json({
        //         message: 'invalid user',
        //         user: ''
        //     })
        // }

    } catch (err) {
        console.error(`error logging in: ${err}`);
        return res.status(500).json({
            message: 'error opccured',
            error: err
        })
    }
};

exports.loginController = loginController; 
const express = require('express');
const router = express.Router()

const userLoginController = require('../controllers/user.controllers')

router.post("/login", userLoginController.loginController)


module.exports = router;
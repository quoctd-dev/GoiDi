const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/login', userController.login);

module.exports = router;

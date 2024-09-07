const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Users GET Routes

// Users POST Routes
router.post('/create-user', UserController.createUser);


module.exports = router;
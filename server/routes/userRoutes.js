const express = require('express');
const router = express.Router();
const { register } = require('../controllers/userController');

router.post('/register', register);
// Define login route here

module.exports = router;

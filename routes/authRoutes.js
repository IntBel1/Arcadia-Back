// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authenticationController');
const authenticateJWT = require('../middleware/auth');

router.post('/register',authController.register);
router.post('/login', authController.login);


module.exports = router;
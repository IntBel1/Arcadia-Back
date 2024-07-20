// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authenticationController');
const authenticateJWT = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });

module.exports = router;
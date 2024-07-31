const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { getCurrentUser, updateUser } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', auth, getCurrentUser);
router.put('/me', auth, updateUser);

module.exports = router;

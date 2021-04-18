const express = require('express');

const router = express.Router();
const AuthService = require('../services/AuthService');

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const savedUser = await AuthService.create(name, email, password);

    res.json({ message: 'ok', data: savedUser });
  } catch (error) {
    res.status(400).json({
      message: 'Error unable to save user, try again'
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await AuthService.authenticate(email, password);

    res.header('auth-token', token).json({
      message: 'Login successful',
      data: {
        token,
      },
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;

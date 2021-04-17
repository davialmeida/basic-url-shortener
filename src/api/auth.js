const express = require('express');

const router = express.Router();

const User = require('../models/user');
const AuthService = require('../services/AuthService');

router.post('/register', async (req, res) => {
  try {
    const isEmailExist = await User.findOne({ email: req.body.email });

    if (isEmailExist) res.status(400).json({ error: 'Email already exists' });

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const savedUser = await user.save();

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

    const token = AuthService.authenticate(email, password);

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

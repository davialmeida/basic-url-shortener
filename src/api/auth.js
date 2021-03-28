const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/user');

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
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json({ message: 'Email is wrong' });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) res.status(400).json({ error: 'Password is wrong' });

  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      email: user.email,
      id: user._id,
    },
    process.env.TOKEN_SECRET
  );

  res.header('auth-token', token).json({
    message: 'Login successful',
    data: {
      token,
    },
  });
});

module.exports = router;

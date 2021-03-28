const express = require('express');
const { verifyToken } = require('../middlewares');
const auth = require('./auth');
const shorten = require('./shorten');

const router = express.Router();

router.use('/shorten', verifyToken, shorten);
router.use('/user', auth);

module.exports = router;

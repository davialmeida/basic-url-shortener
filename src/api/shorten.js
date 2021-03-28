const express = require('express');

const { nanoid } = require('nanoid');

const Link = require('../models/link');

const router = express.Router();

router.post('/', async (req, res) => {
  const { domain, long_url } = req.body;
  const { id } = req.user;

  const path = nanoid(10);

  const short_url = `${process.env.URL}:${process.env.PORT}/${path}`;

  await Link.create({
    path, domain, long_url, user_id: id
  });

  res.status(200).json({
    message: 'success',
    short_url,
  });
});

module.exports = router;

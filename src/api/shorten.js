const express = require('express');
const { default: ShortenService } = require('../services/ShortenService');

const router = express.Router();

router.post('/', async (req, res) => {
  const { domain, long_url } = req.body;
  const { id } = req.user;

  const short_url = await ShortenService.create(domain, long_url, id);

  res.status(200).json({
    message: 'success',
    short_url,
  });
});

module.exports = router;

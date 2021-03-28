const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const Link = require('./models/link');

require('dotenv').config();
require('./database');

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/:path', async (req, res) => {
  const { path } = req.params;
  const link = await Link.findOne({ path });

  if (!link) {
    res.status(404).send({
      message: 'Not found link'
    });
  }

  const { long_url } = link;

  res.redirect(long_url);
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

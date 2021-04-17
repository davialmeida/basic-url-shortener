/* eslint-disable class-methods-use-this */
const { nanoid } = require('nanoid');

const Link = require('../models/link');

const ShortenService = {
  /**
   * Create a shorten url
   * @param {String} domain Domain of url
   * @param {String} long_url The full url to short
   * @param {String} user_id
   */
  async create(domain, long_url, user_id) {
    const path = nanoid(10);

    const short_url = `${process.env.URL}:${process.env.PORT}/${path}`;

    await Link.create({
      path, domain, long_url, user_id
    });

    return short_url;
  }
};

module.exports = ShortenService;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

const AuthService = {
  /**
   * Authenticate user
   * @param {String} email user email
   * @param {String} password user password
   */
  async authenticate(email, password) {
    const user = await User.findOne({ email });

    if (!user) throw new UserException('Email or password is wrong');

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) throw new UserException('Email or password is wrong');

    const token = jwt.sign({
      name: user.name,
      email: user.email,
      id: user._id,
    },
    process.env.TOKEN_SECRET);

    return token;
  }
};

module.exports = AuthService;

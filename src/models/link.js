const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
      unique: true
    },
    domain: {
      type: String,
      required: true
    },
    long_url: {
      type: String,
      required: true
    },
    user_id: {
      type: mongoose.ObjectId,
      required: false,
    },
    valid_until: {
      type: Date,
      default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000)
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Link', LinkSchema);

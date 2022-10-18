const mongoose = require('mongoose');

const { REGULAR_EMAIL } = require('../utils/const');

const errorMessages = require('../errors/errorMessages');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email) {
        return REGULAR_EMAIL.test(email);
      },
      message: (props) => `${props.value} - ${errorMessages.invalidEmail}`,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

module.exports = mongoose.model('user', userSchema);

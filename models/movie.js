const mongoose = require('mongoose');

const { expressionLink } = require('../utils/const');

const { errorMessages } = require('../utils/const');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(val) {
        return expressionLink.test(val);
      },
      message: (props) => `${props.value} - ${errorMessages.invalidLink}`,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(val) {
        return expressionLink.test(val);
      },
      message: (props) => `${props.value} - ${errorMessages.invalidLink}`,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(val) {
        return expressionLink.test(val);
      },
      message: (props) => `${props.value} - ${errorMessages.invalidLink}`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);

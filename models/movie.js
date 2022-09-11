const mongoose = require('mongoose');

const { expressionLink } = require('../utils/const');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    default: 'Страна создания фильма',
  },
  director: {
    type: String,
    required: true,
    default: 'Режиссёр фильма',
  },
  duration: {
    type: Number,
    required: true,
    default: 0,
  },
  year: {
    type: String,
    required: true,
    default: 'Год выпуска фильма',
  },
  description: {
    type: String,
    required: true,
    default: 'Описание фильма',
  },
  image: {
    type: String,
    validate: {
      validator(val) {
        const urlRegex = expressionLink;
        return urlRegex.test(val);
      },
      message: (props) => `${props.value} - некорректная ссылка!`,
    },
  },
  trailerLink: {
    type: String,
    validate: {
      validator(val) {
        const urlRegex = expressionLink;
        return urlRegex.test(val);
      },
      message: (props) => `${props.value} - некорректная ссылка!`,
    },
    required: true,
  },
  thumbnail: {
    type: String,
    validate: {
      validator(val) {
        const urlRegex = expressionLink;
        return urlRegex.test(val);
      },
      message: (props) => `${props.value} - некорректная ссылка!`,
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    default: 'Название фильма на русском языке',
  },
  nameEN: {
    type: String,
    required: true,
    default: 'Movie title in English',
  },
});

module.exports = mongoose.model('movie', movieSchema);

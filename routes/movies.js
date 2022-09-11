const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { expressionLink } = require('../utils/const');

const {
  getMovies, addMovie, removeMovie,
} = require('../controllers/movies');

router.get('/', getMovies);

router.patch('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(expressionLink).required(),
    trailerLink: Joi.string().pattern(expressionLink).required(),
    thumbnail: Joi.string().pattern(expressionLink).required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), addMovie);

router.delete('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24)
      .required(),
  }),
}), removeMovie);

module.exports = router;

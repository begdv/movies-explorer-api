const { celebrate, Joi } = require('celebrate');

const { REGULAR_LINK, REGULAR_EMAIL } = require('../utils/const');

const validatorSigninPost = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().pattern(REGULAR_EMAIL).required(),
    password: Joi.string().required(),
  }),
});

const validatorSignupPost = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().pattern(REGULAR_EMAIL).required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const validatorUsersPatch = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().pattern(REGULAR_EMAIL).required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const validatorMoviesPost = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(REGULAR_LINK).required(),
    trailerLink: Joi.string().pattern(REGULAR_LINK).required(),
    thumbnail: Joi.string().pattern(REGULAR_LINK).required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validatorMoviesDelete = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24).required(),
  }),
});

module.exports = {
  validatorSigninPost,
  validatorSignupPost,
  validatorUsersPatch,
  validatorMoviesPost,
  validatorMoviesDelete,
};

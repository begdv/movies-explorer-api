const mongoose = require('mongoose');
const Movie = require('../models/movie');

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .populate('owner')
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.addMovie = (req, res, next) => {
  const movieData = req.body;
  movieData.owner = req.user._id;
  Movie.create(movieData)
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        return next(new BadRequestError('Переданы некорректные данные при создании карточки'));
      }
      return next(err);
    });
};

module.exports.removeMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм c запрошенным id не найдена');
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Запрещается удалять чужой фильм');
      }
      return Movie.findByIdAndRemove(req.params._id)
        .populate('owner')
        .then((movieRemove) => res.send(movieRemove))
        .catch(next);
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        return next(new BadRequestError('Запрошенный id фильма является некорректным'));
      }
      return next(err);
    });
};

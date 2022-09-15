const router = require('express').Router();

const { validatorMoviesPost, validatorMoviesDelete } = require('../middlewares/validator');

const {
  getMovies, addMovie, removeMovie,
} = require('../controllers/movies');

router.get('/', getMovies);

router.post('/', validatorMoviesPost, addMovie);

router.delete('/:_id', validatorMoviesDelete, removeMovie);

module.exports = router;

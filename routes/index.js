const routes = require('express').Router();
const auth = require('../middlewares/auth');

const NotFoundError = require('../errors/NotFoundError');
const errorMessages = require('../errors/errorMessages');

routes.use(require('./auth'));

routes.use(auth);

routes.use('/users', require('./users'));

routes.use('/movies', require('./movies'));

routes.use((req, res, next) => {
  next(new NotFoundError(errorMessages.notFound));
});

module.exports = routes;

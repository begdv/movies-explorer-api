const routes = require('express').Router();

routes.use('/users', require('./users'));

routes.use('/movies', require('./movies'));

module.exports = routes;

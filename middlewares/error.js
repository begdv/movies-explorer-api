const errorMessages = require('../errors/errorMessages');

module.exports = (err, req, res, next) => {
  const {
    statusCode: status = 500,
    message,
  } = err;

  res.status(status).send({
    statusCode: status,
    message: status === 500
      ? errorMessages.internalServer
      : message,
  });
  next();
};

const errorMessages = require('../errors/errorMessages');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    status: statusCode,
    message: statusCode === 500
      ? errorMessages.internalServer
      : message,
  });
  next();
};

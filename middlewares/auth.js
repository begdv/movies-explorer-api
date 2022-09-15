const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../errors/UnauthorizedError');

const { errorMessages } = require('../utils/const');

module.exports = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError(errorMessages.unauthorized);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new UnauthorizedError(errorMessages.unauthorized);
  }
  req.user = payload;
  return next();
};

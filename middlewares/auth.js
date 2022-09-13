const jwt = require('jsonwebtoken');

require('dotenv').config();

const UnauthorizedError = require('../errors/UnauthorizedError');

const { errorMessages } = require('../utils/const');

module.exports = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  const { authorization } = req.headers;

  try {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedError(errorMessages.unauthorized);
    }
  } catch (err) {
    return next(err);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new UnauthorizedError(errorMessages.unauthorized));
  }
  req.user = payload;
  return next();
};

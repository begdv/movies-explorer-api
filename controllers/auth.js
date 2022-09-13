const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const BadRequestError = require('../errors/BadRequestError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const ConflictError = require('../errors/ConflictError');

const { errorMessages, CONFLICT_EMAIL_ERROR } = require('../utils/const');

const User = require('../models/user');

module.exports.createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email, password: hash, name,
    }))
    .then(() => res.send({
      data: {
        email,
        name,
      },
    }))
    .catch((err) => {
      if (err.code === CONFLICT_EMAIL_ERROR) {
        return next(new ConflictError(errorMessages.conflict));
      }
      if (err instanceof mongoose.Error.ValidationError) {
        return next(new BadRequestError(errorMessages.badRequestSignup));
      }
      return next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  const { email, password } = req.body;
  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(errorMessages.unauthorizedSignin);
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError(errorMessages.unauthorizedSignin);
          }
          const token = jwt.sign(
            { _id: user._id },
            NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
            { expiresIn: '7d' },
          );
          res.send({
            token,
          });
        });
    })
    .catch(next);
};

const mongoose = require('mongoose');

const User = require('../models/user');

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');

const { errorMessages, CONFLICT_EMAIL_ERROR } = require('../utils/const');

module.exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(errorMessages.notFoundUser);
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        return next(new BadRequestError(errorMessages.badRequestUserId));
      }
      return next(err);
    });
};

module.exports.updateUser = (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, req.body, { runValidators: true, new: true })
    .then((user) => {
      if (!user) {
        throw new NotFoundError(errorMessages.notFoundUser);
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.code === CONFLICT_EMAIL_ERROR) {
        return next(new ConflictError(errorMessages.conflict));
      }
      if (err instanceof mongoose.Error.CastError) {
        return next(new BadRequestError(errorMessages.badRequestUserId));
      }
      if (err instanceof mongoose.Error.ValidationError) {
        return next(new BadRequestError(errorMessages.badRequestUserData));
      }
      return next(err);
    });
};

const router = require('express').Router();

const { validatorUsersPatch } = require('../middlewares/validator');

const {
  getUser, updateUser,
} = require('../controllers/users');

router.get('/me', getUser);

router.patch('/me', validatorUsersPatch, updateUser);

module.exports = router;

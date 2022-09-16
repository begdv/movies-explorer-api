const router = require('express').Router();

const { createUser, login } = require('../controllers/auth');

const { validatorSignupPost, validatorSigninPost } = require('../middlewares/validator');

router.post('/signin', validatorSigninPost, login);

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signup', validatorSignupPost, createUser);

module.exports = router;

const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

require('dotenv').config();

const { errors } = require('celebrate');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const auth = require('./middlewares/auth');

const errorHandling = require('./middlewares/error');
const NotFoundError = require('./errors/NotFoundError');

const { NODE_ENV, DB_LINK, PORT = 3000 } = process.env;

const app = express();

mongoose.connect(NODE_ENV === 'production' ? DB_LINK : 'mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
});

app.use(helmet());

app.use(bodyParser.json());

app.use(requestLogger);

app.use(require('./routes/auth'));

app.use(auth);

app.use(require('./routes/index'));

app.use((req, res, next) => {
  next(new NotFoundError('Путь не найден'));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandling);

app.listen(PORT);

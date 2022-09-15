const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const cors = require('cors');

require('dotenv').config();

const { errors } = require('celebrate');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const { rateLimiter } = require('./middlewares/ratelimiter');

const errorHandling = require('./middlewares/error');

const corsOptions = require('./middlewares/cors');

const { DB_LINK, PORT = 3000 } = process.env;

const app = express();

mongoose.connect(DB_LINK, {
  useNewUrlParser: true,
});

app.use(helmet());

app.use(cors(corsOptions));

app.use(rateLimiter);

app.use(bodyParser.json());

app.use(requestLogger);

app.use(require('./routes/index'));

app.use(errorLogger);

app.use(errors());

app.use(errorHandling);

app.listen(PORT);

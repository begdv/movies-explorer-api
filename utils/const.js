const REGULAR_LINK = /^https?:\/\/(www)?(([a-z0-9]*\.)|([a-z0-9][a-z0-9-]*[a-z0-9]\.))+[a-z0-9]{2,}(:\d+)?(\/[a-z0-9$_.+!*'(),;:@&=-]+)?#?(\?v=|embed\/|v\/)?([\w-]+)(\S+)?$/;

const CONFLICT_MONGODB_ERROR = 11000;

const DB_LINK_DEV = 'mongodb://localhost:27017/moviesdb';

module.exports = {
  REGULAR_LINK, DB_LINK_DEV, CONFLICT_MONGODB_ERROR,
};

const expressionLink = /^https?:\/\/(www)?(([a-z0-9]*\.)|([a-z0-9][a-z0-9-]*[a-z0-9]\.))+[a-z0-9]{2,}(:\d+)?(\/[a-z0-9$_.+!*'(),;:@&=-]+)?#?(\?v=|embed\/|v\/)?([\w\-]+)(\S+)?$/;

module.exports = {
  expressionLink,
};

var winston = require('winston');
require('winston-mongodb').MongoDB;
var config = require('../config/config.js');

var logs = {};

logs.hourlyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.hourlyLoggerOptions)
  ]
});

logs.dailyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.dailyLoggerOptions)
  ]
});

logs.weeklyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.weeklyLoggerOptions)
  ]
});

module.exports = logs;

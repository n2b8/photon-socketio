var winston = require('winston');
require('winston-mongodb').MongoDB;
var config = require('../config/config.js');

var logs = {};

logs.tempHourlyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.tempHourlyLoggerOptions)
  ]
});

logs.hmdHourlyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.hmdHourlyLoggerOptions)
  ]
});

logs.tempDailyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.tempDailyLoggerOptions)
  ]
});

logs.hmdDailyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.hmdDailyLoggerOptions)
  ]
});

logs.tempWeeklyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.tempWeeklyLoggerOptions)
  ]
});

logs.hmdWeeklyLogger = new (winston.Logger)({
  transports: [
    new winston.transports.MongoDB(config.hmdWeeklyLoggerOptions)
  ]
});

module.exports = logs;

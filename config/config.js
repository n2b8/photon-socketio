var config = {};

config.device = {
  token: process.env.ACCESS_TOKEN || 'token',
  deviceId: process.env.DEVICE_ID || 'device-id'
};

config.mongo = {
  mongo_URI: process.env.MONGOURI
};

config.tempHourlyLoggerOptions = {
  name: 'Hourly Temp',
  db: config.mongo.mongo_URI,
  collection: 'hourly_temp',
  capped: true,
  cappedMax: 12
};

config.hmdHourlyLoggerOptions = {
  name: 'Hourly Humidity',
  db: config.mongo.mongo_URI,
  collection: 'hourly_hmd',
  capped: true,
  cappedMax: 12
};

config.tempDailyLoggerOptions = {
  name: 'Daily Temp',
  db: config.mongo.mongo_URI,
  collection: 'daily_temp',
  capped: true,
  cappedMax: 24
};

config.hmdDailyLoggerOptions = {
  name: 'Daily Humidity',
  db: config.mongo.mongo_URI,
  collection: 'daily_hmd',
  capped: true,
  cappedMax: 24
};

config.tempWeeklyLoggerOptions = {
  name: 'Weekly Temp',
  db: config.mongo.mongo_URI,
  collection: 'weekly_temp',
  capped: true,
  cappedMax: 14
};

config.hmdWeeklyLoggerOptions = {
  name: 'Weekly Humidity',
  db: config.mongo.mongo_URI,
  collection: 'weekly_hmd',
  capped: true,
  cappedMax: 14
};

module.exports = config;

var config = {};

config.device = {
  token: process.env.ACCESS_TOKEN || 'token',
  deviceId: process.env.DEVICE_ID || 'device-id'
};

config.mongo = {
  mongo_URI: process.env.MONGOURI
};

config.hourlyLoggerOptions = {
  name: 'Hourly',
  db: config.mongo.mongo_URI,
  collection: 'hourly',
  capped: true,
  cappedMax: 12
};

config.dailyLoggerOptions = {
  name: 'Daily',
  db: config.mongo.mongo_URI,
  collection: 'daily',
  capped: true,
  cappedMax: 24
};

config.weeklyLoggerOptions = {
  name: 'Weekly',
  db: config.mongo.mongo_URI,
  collection: 'weekly',
  capped: true,
  cappedMax: 14
};

module.exports = config;

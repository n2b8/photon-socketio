var config = {};

config.device = {
  token: process.env.ACCESS_TOKEN || 'token',
  deviceId: process.env.DEVICE_ID || 'device-id'
};

config.mongo = {
  mongo_URI: process.env.MONGOURI
};

module.exports = config;
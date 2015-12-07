var config = {};

config.device = {
  token: process.env.ACCESS_TOKEN || 'token',
  deviceId: process.env.DEVICE_ID || 'device-id'
};

module.exports = config;
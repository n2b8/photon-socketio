var hourlyFrequency = 300000; // 5 minutes
var dailyFrequency = 3600000; // 1 hour
var weeklyFrequency = 43200000; // 12 hours
var hourlyInterval;
var dailyInterval;
var weeklyInterval;
var spark = require('spark');
var logs = require("./logs.js");
var config = require("../config/config.js");

function hourly() {
  hourlyInterval = setInterval(function () {
    spark.getDevice(config.device.deviceId, function(err, device) {
      device.getVariable('temp', function(err, data) {
        if (err) {
          console.warn('An error occurred while getting hourly temp attr: ', err);
        } else {
          console.info('Hourly temp updated');
          logs.tempHourlyLogger.info(data);
        }
      });
      device.getVariable('humidity', function(err, data) {
        if (err) {
          console.warn('An error occured while getting hourly humidty attr: ', err);
        } else {
          console.info('Hourly humidty updated');
          logs.hmdHourlyLogger.info(data);
        }
      })
    });
  }, hourlyFrequency);
}

function daily() {
    interval = setInterval(function () {
      spark.getDevice(config.device.deviceId, function(err, device) {
        device.getVariable('temp', function(err, data) {
          if (err) {
            console.warn('An error occurred while getting daily temp attr: ', err);
          } else {
            console.info('Daily temp updated');
            logs.tempDailyLogger.info(data);
          }
        });
        device.getVariable('humidity', function(err, data) {
          if (err) {
            console.warn('An error occured while getting daily humidty attr: ', err);
          } else {
            console.info('Daily humidty updated');
            logs.hmdDailyLogger.info(data);
          }
        })
      });
    }, dailyFrequency);
}

function weekly() {
    interval = setInterval(function () {
      spark.getDevice(config.device.deviceId, function(err, device) {
        device.getVariable('temp', function(err, data) {
          if (err) {
            console.warn('An error occurred while getting Weekly temp attr: ', err);
          } else {
            console.info('Weekly temp updated');
            logs.tempWeeklyLogger.info(data);
          }
        });
        device.getVariable('humidity', function(err, data) {
          if (err) {
            console.warn('An error occured while getting weekly humidty attr: ', err);
          } else {
            console.info('Weekly humidty updated');
            logs.hmdWeeklyLogger.info(data);
          }
        })
      });
    }, weeklyFrequency);
}

exports.hourly = hourly;
exports.daily = daily;
exports.weekly = weekly;

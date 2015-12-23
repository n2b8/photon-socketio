var hourlyFrequency = 300000; // 5 minutes
var dailyFrequency = 3600000; // 1 hour
var weeklyFrequency = 43200000; // 12 hours
var interval;
var spark = require('spark');
var logs = require("./logs.js");
var config = require("../config/config.js");

function hourly() {
    interval = setInterval(function () {
        spark.getEventStream('Temperature', config.device.deviceId, function(data) {
            logs.hourlyLogger.info(data);
        });
        spark.getEventStream('Humidity', config.device.deviceId, function(data) {
            logs.hourlyLogger.info(data);
        });
    }, hourlyFrequency);
}

function daily() {
    interval = setInterval(function () {
        spark.getEventStream('Temperature', config.device.deviceId, function(data) {
            logs.dailyLogger.info(data);
        });
        spark.getEventStream('Humidity', config.device.deviceId, function(data) {
            logs.dailyLogger.info(data);
        });
    }, dailyFrequency);
}

function weekly() {
    interval = setInterval(function () {
        spark.getEventStream('Temperature', config.device.deviceId, function(data) {
            logs.weeklyLogger.info(data);
        });
        spark.getEventStream('Humidity', config.device.deviceId, function(data) {
            logs.weeklyLogger.info(data);
        });
    }, weeklyFrequency);
}

exports.hourly = hourly;
exports.daily = daily;
exports.weekly = weekly;
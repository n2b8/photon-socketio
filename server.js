var http = require('http');
var path = require('path');
var spark = require('spark');
var socketio = require('socket.io');
var config = require('./config/config.js');

var express = require('express');
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);



router.use(express.static(path.resolve(__dirname, 'client')));

var callback = function () {
  console.log('Succesfully logged in!');
};

spark.login({accessToken: config.device.token}, callback);

io.on('connection', function (socket) {
  
  //Get temp
  spark.getEventStream('Temperature', config.device.deviceId, function(data) {
    socket.emit('temperature', data);
  });

  //Get humidity
  spark.getEventStream('Humidity', config.device.deviceId, function(data) {
    socket.emit('humidity', data);
  });
  
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});

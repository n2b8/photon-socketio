//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//

var http = require('http');
var path = require('path');
var spark = require('spark');
var socketio = require('socket.io');

var express = require('express');
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);



router.use(express.static(path.resolve(__dirname, 'client')));

var callback = function () {
  console.log('Succesfully logged in!');
};

spark.login({accessToken: 'c548b041552f59498adb88a6b5806c824683cfdd'}, callback);

io.on('connection', function (socket) {
  
  //Get temp
  spark.getEventStream('Temperature', '28002e000347343337373737', function(data) {
    console.log("Temperature: " + data.data);
    socket.emit('temperature', data);
  });

  //Get humidity
  spark.getEventStream('Humidity', '28002e000347343337373737', function(data) {
    console.log("Humidity: " + data.data);
    socket.emit('humidity', data);
  });
  
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});

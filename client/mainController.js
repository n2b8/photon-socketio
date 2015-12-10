angular.module('controllers', [])

    .controller('mainController', ['$scope', '$http', 'socket', function($scope, $http, socket) {
        
        $scope.humidity = 0;
        $scope.temperature = 0;
        $scope.time = 0;
        $scope.currentPos = 0;
        $scope.setPosition = {
            position: ''
        };
        
        socket.on('humidity', function(data) {
            $scope.humidity = data.data;
            $scope.time = data.published_at;
        });
        
        socket.on('temperature', function(data) {
            $scope.temperature = data.data;
            $scope.time = data.published_at;
        });
        
        socket.on('position', function(data) {
            $scope.currentPos = data.data;
        });
        
        $scope.setPos = function () {
          $http.post('/api/servo', $scope.setPosition);
        };
        
    }]);
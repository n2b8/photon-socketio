angular.module('controllers', [])

    .controller('mainController', ['$scope', 'socket', function($scope, socket) {
        
        $scope.humidity = 0;
        $scope.temperature = 0;
        
        socket.on('humidity', function(data) {
            $scope.humidity = data.data;
        });
        
        socket.on('temperature', function(data) {
            $scope.temperature = data.data;
        });
        
    }]);
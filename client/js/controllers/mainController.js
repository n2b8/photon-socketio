angular.module('controllers', [])

    .controller('mainController', ['$scope', 'socket', function($scope, socket) {

        $scope.humidity = "Waiting for data";
        $scope.temperature = "Waiting for data";

        socket.on('humidity', function(data) {
            $scope.humidity = data.data;
        });

        socket.on('temperature', function(data) {
            $scope.temperature = data.data;
        });

    }]);

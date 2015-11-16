// public/js/controllers/AuthController.js
angular
    .module('NerdApp')
    .controller('AuthCtrl',
    [
        '$scope',
        '$location',
        'auth',
        function ($scope, $location, auth) {
            $scope.user = {};

            $scope.register = function () {
                auth.register($scope.user).error(function (error) {
                    $scope.error = error;
                }).then(function () {
                    $location.url('/nerds');
                });
            };

            $scope.logIn = function () {
                auth.logIn($scope.user).error(function (error) {
                    $scope.error = error;
                }).then(function () {
                    $location.url('/nerds');
                });
            };
        }
    ]
);
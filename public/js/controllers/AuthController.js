// public/js/controllers/AuthController.js
angular
    .module('NerdApp')
    .controller('AuthCtrl',
    [
        '$scope',
        '$state',
        'auth',
        function ($scope, $state, auth) {
            $scope.user = {};

            $scope.register = function () {
                auth.register($scope.user).error(function (error) {
                    $scope.error = error;
                }).then(function () {
                    $state.go('nerds');
                });
            };

            $scope.logIn = function () {
                auth.logIn($scope.user).error(function (error) {
                    $scope.error = error;
                }).then(function () {
                    $state.go('nerds');
                });
            };
        }
    ]
);
// public/js/controllers/MainCtrl.js
angular.module('NerdApp')
    .controller('MainController', function ($scope, auth) {

        $scope.tagline = 'To the moon and back!';
        $scope.isLoggedIn = auth.isLoggedIn;
    });
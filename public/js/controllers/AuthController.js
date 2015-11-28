// public/js/controllers/AuthController.js
angular
    .module('NerdApp')
    .controller('AuthController', AuthController);

function AuthController($state, auth) {
    var vmAuth = this;
    vmAuth.user = {};

    vmAuth.register = function () {
        auth.register(vmAuth.user).error(function (error) {
            vmAuth.error = error;
        }).then(function () {
            $state.go('nerds');
        });
    };

    vmAuth.logIn = function () {
        auth.logIn(vmAuth.user).error(function (error) {
            vmAuth.error = error;
        }).then(function () {
            $state.go('nerds');
        });
    };
}
// public/js/controllers/AuthController.js
angular
    .module('Nerd')
    .factory('auth', auth);

angular
    .module('appRoutes')
    .factory('auth', auth);

auth.$inject = ['$http', '$window'];

function auth($http, $window) {
    var auth = {};

    auth.saveToken = function (token) {
        $window.localStorage['lorenz-verschingel-web-token'] = token;
    };

    auth.getToken = function () {
        return $window.localStorage['lorenz-verschingel-web-token'];
    };

    auth.isLoggedIn = function () {
        var token = auth.getToken();

        if (token) {
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };

    auth.currentUser = function () {
        if (auth.isLoggedIn()) {
            var token = auth.getToken();
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.username;
        }
    };

    auth.register = function (user) {
        return $http.post('/register', user).success(function (data) {
            auth.saveToken(data.token);
        });
    };

    auth.logIn = function (user) {
        return $http.post('/login', user).success(function (data) {
            console.log("logged in");
            auth.saveToken(data.token);
        });
    };

    auth.logOut = function () {
        $window.localStorage.removeItem('lorenz-verschingel-web-token');
    };

    return auth;
}
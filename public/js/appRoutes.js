// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: '/views/nerd.html',
            controller: 'NerdController',
            controllerAs: 'vmNerd'
        })
        .when('/login', {
            templateUrl: '/views/login.html'
        })
        .when('/signup', {
            templateUrl: '/views/signup.html'
        })
    ;

    $locationProvider.html5Mode(true);

}]);
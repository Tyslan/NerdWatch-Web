// public/js/appRoutes.js
angular
    .module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

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
            templateUrl: '/views/login.html',
            controller: 'AuthCtrl',
            onEnter: ['$location', 'auth', function ($location, auth) {
                if (auth.isLoggedIn()) {
                    $location.url('/nerds');
                }
            }]
        })
        .when('/register', {
            templateUrl: '/views/register.html',
            controller: 'AuthCtrl',
            onEnter: ['$location', 'auth', function ($state, auth) {
                if (auth.isLoggedIn()) {
                    $location.url('/nerds');
                }
            }]
        })
        .otherwise({
            redirectTo: '/',
            controller: 'MainController'
        })
    ;

    $locationProvider.html5Mode(true);

}]);
// public/js/appRoutes.js
angular
    .module('NerdApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider

            // home page
            .state('home', {
                url: '/home',
                templateUrl: '/views/home.html',
                controller: 'MainController'
            })

            // nerds page that will use the NerdController
            .state('nerds', {
                url: '/nerds',
                templateUrl: '/views/nerd.html',
                controller: 'NerdController',
                controllerAs: 'vmNerd'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/views/login.html',
                controller: 'AuthCtrl',
                onEnter: ['$location', 'auth', function ($location, auth) {
                    if (auth.isLoggedIn()) {
                        $location.url('/home');
                    }
                }]
            })
            .state('register', {
                url: '/register',
                templateUrl: '/views/register.html',
                controller: 'AuthCtrl',
                onEnter: ['$location', 'auth', function ($location, auth) {
                    if (auth.isLoggedIn()) {
                        $location.url('/home');
                    }
                }]
            })
            .state('movies', {
                url: '/movies',
                templateUrl: '/views/movies.html',
                controller: 'MovieController',
                controllerAs: 'vmMovies'
            })
            .state('series', {
                url: '/series',
                templateUrl: '/views/series.html',
                controller: 'SeriesController',
                controllerAs: 'vmSeries'
            });

        $urlRouterProvider.otherwise('home');
        $locationProvider.html5Mode(true);

    }]);
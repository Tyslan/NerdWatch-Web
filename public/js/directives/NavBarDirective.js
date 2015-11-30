angular.module('NerdApp')
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../views/navbar.html',
            controller: 'NavController',
            controllerAs: 'vmNav',
        };
    });
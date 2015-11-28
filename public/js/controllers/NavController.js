angular
    .module('NerdApp')
    .controller('NavController', NavController);

function NavController($scope, auth) {
    $scope.isLoggedIn = auth.isLoggedIn;
    $scope.currentUser = auth.currentUser;
    $scope.logOut = auth.logOut;
}
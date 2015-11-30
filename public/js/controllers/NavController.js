angular
    .module('NerdApp')
    .controller('NavController', NavController);

function NavController(auth) {
    var vmNav = this;
    vmNav.isLoggedIn = auth.isLoggedIn;
    vmNav.currentUser = auth.currentUser;
    vmNav.logOut = auth.logOut;
}
// public/js/controllers/MainController.js
angular
    .module('NerdApp')
    .controller('MainController', MainController);

function MainController(auth) {
    var vmMain = this;
    vmMain.tagline = 'Nerd approved movies and series';
    vmMain.isLoggedIn = auth.isLoggedIn;
}
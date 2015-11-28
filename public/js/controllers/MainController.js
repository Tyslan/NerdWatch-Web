// public/js/controllers/MainController.js
angular
    .module('NerdApp')
    .controller('MainController', MainController);

function MainController(auth) {
    var vmMain = this;
    vmMain.tagline = 'To the moon and back!';
    vmMain.isLoggedIn = auth.isLoggedIn;
}
// public/js/controllers/NerdCtrl.js
angular
    .module('NerdApp')
    .controller('NerdController', NerdController);

function NerdController(NerdService, auth) {
    var vmNerd = this;
    vmNerd.tagline = 'Nothing beats a pocket protector!';

    vmNerd.isLoggedIn = auth.isLoggedIn;

    if (vmNerd.isLoggedIn) {

        NerdService.get().then(function (response) {
            vmNerd.nerds = response.data;
        });
    }
}
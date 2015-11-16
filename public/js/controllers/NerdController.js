// public/js/controllers/NerdCtrl.js
angular
    .module('NerdApp')
    .controller('NerdController', NerdController);

function NerdController (NerdService){
    var vmNerd = this;
    vmNerd.tagline = 'Nothing beats a pocket protector!';
    NerdService.get().then(function (response) {
        vmNerd.nerds = response.data;
    });
}
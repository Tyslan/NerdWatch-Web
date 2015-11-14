// public/js/controllers/NerdCtrl.js
angular
    .module('Nerd')
    .controller('NerdController', NerdController);

function NerdController (NerdService){
    var vmNerd = this;
    vmNerd.tagline = 'Nothing beats a pocket protector!';
    NerdService.get().then(function (response) {
        console.log(response.data)
        vmNerd.nerds = response.data;
    });
}
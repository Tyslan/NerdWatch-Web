// public/js/controllers/NerdCtrl.js
angular
    .module('NerdCtrl', [])
    .controller('NerdController', NerdController);

function NerdController (){
    var vmNerd = this;
    vmNerd.tagline = 'Nothing beats a pocket protector!';
}
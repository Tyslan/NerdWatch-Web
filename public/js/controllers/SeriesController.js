// public/js/controllers/MovieController.js
angular
    .module('NerdApp')
    .controller('SeriesController', SeriesController);

function SeriesController(SeriesService, auth) {
    var vmSeries = this;
    vmSeries.tag = 'Nerd Approved series';

    vmSeries.isLoggedIn = auth.isLoggedIn;

    if (vmSeries.isLoggedIn) {
        SeriesService.get().then(function (response) {
            vmSeries.series = response.data;
        });
    }
}
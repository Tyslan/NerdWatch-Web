// public/js/controllers/MovieController.js
angular
    .module('NerdApp')
    .controller('MovieController', MovieController);

function MovieController(MovieService, auth) {
    var vmMovies = this;
    vmMovies.tag = "Nerd Approved movies"

    vmMovies.isLoggedIn = auth.isLoggedIn;

    if (vmMovies.isLoggedIn) {
        MovieService.get().then(function (response) {
            vmMovies.movies = response.data;
        });
    }
}
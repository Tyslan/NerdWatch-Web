// public/js/controllers/AddMovieController.js
angular
    .module('NerdApp')
    .controller('AddMovieController', AddMovieController);

function AddMovieController(MovieService) {
    var vmAddMovie = this;
    vmAddMovie.movie = {};
    vmAddMovie.genres = [];

    vmAddMovie.possibleGenres = [
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Drama',
        'Family',
        'Fantasy',
        'Horror',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Thriller'
    ];

    vmAddMovie.addMovie = function () {
        vmAddMovie.movie.genres = vmAddMovie.genres;
        console.log(vmAddMovie.movie);
        MovieService.create(vmAddMovie.movie)
            .success(function () {
                vmAddMovie.succes = 'Movie added';
            })
            .error(function(error){
                vmAddMovie.error = error;
            });
    };

    vmAddMovie.sync = function (bool, genre) {
        if (bool) {
            // add item
            vmAddMovie.genres.push(genre);
        } else {
            // remove item
            for (var i = 0; i < vmAddMovie.genres.length; i++) {
                if (vmAddMovie.genres[i] === genre) {
                    vmAddMovie.genre.splice(i, 1);
                }
            }
        }
    };

    vmAddMovie.isChecked = function (genre) {
        var match = false;
        for (var i = 0; i < vmAddMovie.genres.length; i++) {
            if (vmAddMovie.genres[i] === genre) {
                match = true;
            }
        }
        return match;
    };
}
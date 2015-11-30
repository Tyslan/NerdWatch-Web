// public/js/services/MovieService.js
angular
    .module('NerdApp')
    .factory('MovieService', MovieService);

function MovieService($http) {
    return {
        // call to get all nerds
        get: function () {
            return $http.get('/api/movies');
        },

        getById: function (id) {
            return $http.get('/api/movies/' + id);
        },

        upvote: function (id) {
            return $http.put('/api/movies/' + id + '/upvote');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create: function (movieData) {
            return $http.post('/api/movies', movieData);
        },

        // call to DELETE a nerd
        delete: function (id) {
            return $http.delete('/api/movies/' + id);
        }
    };
}
// public/js/services/SeriesService.js
angular
    .module('NerdApp')
    .factory('SeriesService', SeriesService);

function SeriesService($http){
    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/series');
        },

        getById : function(id) {
            return $http.get('/api/series/' + id);
        },

        upvote: function (id) {
            return $http.put('/api/series/' + id + '/upvote');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(movieData) {
            return $http.post('/api/series', movieData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/series/' + id);
        }
    };
}
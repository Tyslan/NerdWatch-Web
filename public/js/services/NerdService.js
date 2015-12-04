// public/js/services/NerdService.js
angular
    .module('NerdApp')
    .factory('NerdService', NerdService);

function NerdService($http){
    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/distinctContributors');
        }
    };
}
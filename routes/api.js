// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Nerd = require('./../models/nerd');
var Movie = require('./../models/movie');
var Series = require('./../models/series');

Nerd.methods(['get', 'put', 'post', 'delete']);
Nerd.register(router, '/nerds');

Movie.methods(['get', 'put', 'post', 'delete']);

Movie.route('upvote', {
    detail: true,
    handler: function(req, res, next) {
        Movie.findOne({_id: req.params.id}).exec(function(err, movie){
            movie.upvote();
            res.json(movie);
        });
    }
});

Movie.register(router, '/movies');

Series.methods(['get', 'put', 'post', 'delete']);
Series.register(router, '/series');

module.exports = router;
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Movie = require('./../models/movie');
var Series = require('./../models/series');

Movie.methods(['get', 'put', 'post', 'delete']);

Movie.route('upvote', {
    detail: true,
    handler: function (req, res, next) {
        Movie.findOne({_id: req.params.id}).exec(function (err, movie) {
            movie.upvote();
            res.json(movie);
        });
    }
});

router.get('/distinctContributors', function (req, res, next) {
    Movie.find().distinct('contributor', function (err, contributors) {
        contributors.sort()
        res.json(contributors);
    });
});

Movie.register(router, '/movies');

Series.methods(['get', 'put', 'post', 'delete']);

Series.route('upvote', {
    detail: true,
    handler: function (req, res, next) {
        Series.findOne({_id: req.params.id}).exec(function (err, series) {
            series.upvote();
            res.json(series);
        });
    }
});

Series.register(router, '/series');

module.exports = router;